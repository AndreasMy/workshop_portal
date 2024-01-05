const express = require('express');
const path = require('path');
const fs = require('fs');

// Directory containing images
const imagesRootDir = path.join(__dirname, '../frontend/public/images');

// Function to convert file paths to URL paths
const filePathToURL = (filePath) => {
    const relativePath = path.relative(imagesRootDir, filePath);
    return `/images/${relativePath.split(path.sep).join('/')}`;
};

// Recursive function to read directory contents and return an array of objects
function readDirectoryRecursively(directory) {
    const result = [];

    const files = fs.readdirSync(directory);
    files.forEach(file => {
        const filePath = path.join(directory, file);
        if (fs.statSync(filePath).isDirectory()) {
            // Merge the array from the subdirectory into the current result
            result.push(...readDirectoryRecursively(filePath)); 
        } else if (file.endsWith('.jpg')) {
            result.push({
                image: filePathToURL(filePath),
                alt: 'descriptive text', // Modify this as needed
                className: 'gallery-image'
            });
        }
    });

    return result;
}

// Generate gallery data as a nested object
const galleryData = {
    drawings: readDirectoryRecursively(path.join(imagesRootDir, 'drawings')),
    paintings: readDirectoryRecursively(path.join(imagesRootDir, 'paintings')),
    // Add other categories as needed
};

// Convert the gallery data to a string representing JavaScript object syntax
const dataString = `export const galleryData = ${JSON.stringify(galleryData, null, 2)};`;

// Write the gallery data to a JS file
const outputPath = path.join(__dirname, '../frontend/src/data/galleryData.js');

fs.writeFile(outputPath, dataString, (err) => {
    if (err) {
        console.error("Could not write gallery data file.", err);
        process.exit(1);
    }

    console.log("Gallery data file was created successfully!");
});

const PORT = 3000;
const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server => http://localhost:${PORT}`);
});
