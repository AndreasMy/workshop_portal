import '../../styles/BlogEntries.css';
import { ImageContainer } from '../common/ImageContainer';
import { entryData } from '../../data/blogData';

export const BlogEntries = () => {
  return (
    <>
      {entryData.map((entry, index) => (
        <a key={index} className='blog-entry-container' href=''>
          <div className='blog-entry'>
            <ImageContainer
              images={entry.images}
              containerClassName={'entry-img-header'}
            />
            <h2>{entry.title}</h2>
            <div className='poster-line'></div>

            <div className='poster-info-container'>
              <p>Sted : {entry.location}</p>
              <p>|</p>
              <p>Dato: {entry.date}</p>
              <p>|</p>
              <p>Henvendelser: amykle85@gmail.com</p>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};
