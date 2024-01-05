import '../../styles/BlogEntries.css';
import { ImageContainer } from '../common/ImageContainer';
import { entryData } from '../../data/blogData';

export const BlogEntries = () => {
  return (
    <>
      {entryData.map((entry, index) => (
        <a
          key={index}
          className='poster-container'
          href={entry.href}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='poster-entry'>
            <ImageContainer
              images={entry.images}
              containerClassName={'poster-img-header'}
            />
            <h2 className='poster-header'>{entry.title}</h2>
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
