//import { ImageContainer } from '../components/common/ImageContainer';
// import { ImageGallery } from '../components/Gallery/ImageGallery';
import { Outlet } from 'react-router-dom';
import { GalleryCategories } from '../components/Gallery/galleryCategorySelect';
import { galleryCategories } from '../data/gallerCategoryData';
// import { galleryData } from '../data/galleryData';
import '../styles/Gallery.css';

export const Gallery = () => {
  return (
    <>
      <h2>Select a category</h2>
      <GalleryCategories
        ulClassName={'cat-select-container'}
        linkClassName={'cat-select-item'}
        data={galleryCategories}
      />
      <Outlet />
    </>
  );
};
