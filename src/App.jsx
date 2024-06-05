import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout.component";
import { HomePage } from "./pages/home/home.page";
import { Gallery } from "./pages/gallery/gallery.page";
import { Workshops } from "./pages/workshops/workshops.page";
import { About } from "./pages/about/about.page";
import { Tutorials } from "./pages/tutorials/tutorials.page";
import { BlogPage } from "./pages/blog/blog.page";
import { ImageGallery } from "./components/imageGallery/imageGallery.component";

import { galleryImagesData } from "./data/galleryImagesData";
import { galleryThumbnailsData } from "./data/galleryThumbnailsData";

import "../src/components/layout/LayoutMQueries.styles.css";
import "./globalStyles/global.styles.css";

function App() {
  return (
    // eslint-disable-next-line no-undef
    <Router basename={import.meta.env.PUBLIC_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Gallery />}>
            <Route
              path="drawings"
              element={
                <ImageGallery
                  images={galleryImagesData.drawings}
                  thumbnails={galleryThumbnailsData.drawings}
                  imgListClassName="gallery-image"
                />
              }
            />
            <Route
              path="paintings"
              element={
                <ImageGallery
                  images={galleryImagesData.paintings}
                  thumbnails={galleryThumbnailsData.paintings}
                  imgListClassName="gallery-image"
                />
              }
            />
            <Route
              path="digital"
              element={
                <ImageGallery
                  images={galleryImagesData.digital}
                  thumbnails={galleryThumbnailsData.digital}
                  imgListClassName="gallery-image"
                />
              }
            />
          </Route>
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
