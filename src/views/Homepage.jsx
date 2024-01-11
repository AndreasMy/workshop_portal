// import { BlogEntries } from '../components/blogpost/BlogEntries';
import '../styles/SplashImage.css';
//import { homepageData } from '../data/homepageData';
//import { ImageContainer } from '../components/Common/ImageContainer';
import { ImageCarousel } from '../components/GalleryComponents/ImageCarousel';

export const HomePage = () => {
  return (
    <>


      <ImageCarousel />
    
{/*       <div className='splash-wrapper'>
        <ImageContainer
          images={homepageData}
          containerClassName={'fp-splash-container'}
        />
      </div> */}
    </>
  );
};
