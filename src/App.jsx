import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import {HomePage} from './components/pages/HomePage';
import { Gallery } from './components/pages/Gallery';
import { Workshops } from './components/pages/Workshops';
import { About } from './components/pages/About';
import { Tutorials } from './components/pages/Tutorials';
import { BlogPage } from './components/pages/Blog';
import { ImageGallery } from './components/content/ImageGallery';
import { galleryData } from './data/galleryData';

import './styles/App.css';
import './styles/LayoutMQueries.css'
import './styles/page-colors.css';

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
