//import { ImageContainer } from '../components/common/ImageContainer';
// import { ImageGallery } from '../components/Gallery/ImageGallery';
// import { galleryData } from '../data/galleryData';
import { Outlet, useLocation } from 'react-router-dom';
import { GalleryCategories } from '../components/GalleryComponents/galleryCategorySelect';
import { galleryCategories } from '../data/galleryCategoryData';
import { useEffect, useState } from 'react';
import '../styles/Gallery.css';
import { PageSection } from '../components/Common/PageSection';

export const Gallery = () => {
  const location = useLocation();
  const [categorySelected, setCategorySelected] = useState(false);

  useEffect(() => {
    setCategorySelected(location.pathname !== '/gallery');
  }, [location]);

  return (
    <>
      <GalleryCategories
        ulClassName={
          categorySelected 
          ? 'cat-select-wrapper-shrink' 
          : 'cat-select-wrapper'
        }
        liClassName={
          categorySelected
          ? 'cat-select-container-shrink'
          : 'cat-select-container'
        }
        linkClassName={
          categorySelected 
          ? 'cat-select-item-shrink' 
          : 'cat-select-item'
        }
        overlayClassName={
          categorySelected 
          ? 'cat-select-overlay-shrink' 
          : 'cat-select-overlay'
        }
        titleClassname={
          categorySelected 
          ? 'cat-select-title-shrink' 
          : 'cat-select-title'
        }
        imageClassName={
          categorySelected 
          ? 'cat-select-image-shrink' 
          : 'cat-select-image'
        }
        data={galleryCategories}
        />
   <PageSection
           headerText={""}
           wrapperClassName="content-wrapper"
           containerClassName="content-container">
      <Outlet />
   </PageSection>
       
    </>
  );
};
