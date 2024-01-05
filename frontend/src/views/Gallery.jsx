//import { ImageContainer } from '../components/common/ImageContainer';
import { ImageGallery } from '../components/Gallery/ImageGallery';
import { galleryData } from '../data/galleryData';
import '../styles/Gallery.css'

export const Gallery = () => {
  return (
    <>
      <ImageGallery
        images={galleryData}
        imgListClassName={'gallery-img-container'}
      />
    </>
  );
};
