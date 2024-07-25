/* eslint-disable no-undef */
import express from "express";
import path from "path";
import fs from "fs";
import sharp from "sharp";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Directory containing images
const imagesRootDir = path.join(__dirname, "../../public/images");
const thumbnailsRootDir = path.join(__dirname, "../../public/thumbnails");

// Function to convert file paths to URL paths
const filePathToURL = (filePath, baseDir = imagesRootDir) => {
  const relativePath = path.relative(baseDir, filePath);
  return `/workshop_portal/images/${relativePath.split(path.sep).join("/")}`;
};

const filePathToThumbnailURL = (filePath) => {
  const relativePath = path.relative(thumbnailsRootDir, filePath);
  return `/workshop_portal/thumbnails/${relativePath
    .split(path.sep)
    .join("/")}`;
};

// Function to generate thumbnail for an image
const generateThumbnail = async (filePath, thumbnailPath) => {
  // Ensure the thumbnail directory exists
  const thumbnailDir = path.dirname(thumbnailPath);
  if (!fs.existsSync(thumbnailDir)) {
    fs.mkdirSync(thumbnailDir, { recursive: true });
  }
  await sharp(filePath)
    .resize({ width: 450 }) // Adjust the width as needed
    .toFile(thumbnailPath);
};

// Recursive function to read directory contents and return an array of objects
const readDirectoryRecursively = async (
  directory,
  baseDir = imagesRootDir,
  type = "images"
) => {
  const result = [];
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Merge the array from the subdirectory into the current result
      result.push(...(await readDirectoryRecursively(filePath, baseDir, type)));
    } else if (file.endsWith(".jpg")) {
      if (type === "images") {
        result.push({
          image: filePathToURL(filePath, imagesRootDir),
          alt: "descriptive text", // Modify this as needed
          className: "gallery-image",
        });
      } else if (type === "thumbnails") {
        const relativeDir = path.relative(
          imagesRootDir,
          path.dirname(filePath)
        );
        const thumbnailDir = path.join(thumbnailsRootDir, relativeDir);
        const thumbnailPath = path.join(
          thumbnailDir,
          `${path.basename(file, ".jpg")}-thumbnail.jpg`
        );
        await generateThumbnail(filePath, thumbnailPath);

        result.push({
          image: filePathToThumbnailURL(thumbnailPath),
          alt: "descriptive text", // Modify this as needed
          className: "gallery-image-thumbnail",
          index: "",
        });
      }
    }
  }

  return result;
};

// Generate gallery data as nested objects for both images and thumbnails
const generateGalleryData = async () => {
  const galleryImagesData = {
    drawings: await readDirectoryRecursively(
      path.join(imagesRootDir, "drawings"),
      imagesRootDir,
      "images"
    ),
    paintings: await readDirectoryRecursively(
      path.join(imagesRootDir, "paintings"),
      imagesRootDir,
      "images"
    ),
    digital: await readDirectoryRecursively(
      path.join(imagesRootDir, "digital"),
      imagesRootDir,
      "images"
    ),
    photos: await readDirectoryRecursively(
      path.join(imagesRootDir, "photos"),
      imagesRootDir,
      "images"
    ),
    // Add other categories as needed
  };

  const galleryThumbnailsData = {
    drawings: await readDirectoryRecursively(
      path.join(imagesRootDir, "drawings"),
      imagesRootDir,
      "thumbnails"
    ),
    paintings: await readDirectoryRecursively(
      path.join(imagesRootDir, "paintings"),
      imagesRootDir,
      "thumbnails"
    ),
    digital: await readDirectoryRecursively(
      path.join(imagesRootDir, "digital"),
      imagesRootDir,
      "thumbnails"
    ),
    // Add other categories as needed
  };

  // Convert the gallery data to strings representing JavaScript object syntax
  const imagesDataString = `export const galleryImagesData = ${JSON.stringify(
    galleryImagesData,
    null,
    2
  )};`;
  const thumbnailsDataString = `export const galleryThumbnailsData = ${JSON.stringify(
    galleryThumbnailsData,
    null,
    2
  )};`;

  // Write the gallery data to separate JS files
  const imagesOutputPath = path.join(
    __dirname,
    "../data/galleryImagesData.js"
  );
  const thumbnailsOutputPath = path.join(
    __dirname,
    "../data/galleryThumbnailsData.js"
  );

  fs.writeFile(imagesOutputPath, imagesDataString, (err) => {
    if (err) {
      console.error("Could not write gallery images data file.", err);
      process.exit(1);
    }

    console.log("Gallery images data file was created successfully!");
  });

  fs.writeFile(thumbnailsOutputPath, thumbnailsDataString, (err) => {
    if (err) {
      console.error("Could not write gallery thumbnails data file.", err);
      process.exit(1);
    }

    console.log("Gallery thumbnails data file was created successfully!");
  });
};

generateGalleryData();

const PORT = 3000;
const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server => http://localhost:${PORT}`);
});
