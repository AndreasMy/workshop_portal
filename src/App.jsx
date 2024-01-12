import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { HomePage } from './views/Homepage';
import { Gallery } from './views/Gallery';
import { Workshops } from './views/Workshops';
import { About } from './views/About';
import { Tutorials } from './views/Tutorials';
import { BlogPage } from './views/Blog';
import { ImageGallery } from './components/GalleryComponents/ImageGallery';
import { galleryData } from './data/galleryData';

import './styles/App.css';
import './styles/LayoutMQueries.css'

function App() {
  return (
    // eslint-disable-next-line no-undef
    <Router basename={import.meta.env.PUBLIC_URL}>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/gallery' element={<Gallery />}>
            <Route
              path='drawings'
              element={
                <ImageGallery
                  images={galleryData.drawings}
                  imgListClassName='gallery-image'
                />
              }
            />
            <Route
              path='paintings'
              element={
                <ImageGallery
                  images={galleryData.paintings}
                  imgListClassName='gallery-image'
                />
              }
            />
            <Route
              path='digital'
              element={
                <ImageGallery
                  images={galleryData.digital}
                  imgListClassName='gallery-image'
                />
              }
            />
          </Route>
          <Route path='/workshops' element={<Workshops />} />
          <Route path='/tutorials' element={<Tutorials />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
