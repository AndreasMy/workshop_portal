import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/layout.component';
import { HomePage } from './pages/home/Home.page';
import { Gallery } from './pages/gallery/Gallery.page';
import { Workshops } from './pages/workshops/Workshops.page';
import { About } from './pages/about/About.page';
import { Tutorials } from './pages/tutorials/Tutorials.page';
import { BlogPage } from './pages/blog/Blog.page';
import { ImageGallery } from './components/imageGallery/ImageGallery.component';
import { galleryData } from './data/galleryData';

import './styles/App.css';
import './styles/LayoutMQueries.styles.css'
import './styles/pageColors.styles.css';

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
