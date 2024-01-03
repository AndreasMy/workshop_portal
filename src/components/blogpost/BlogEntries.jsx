import '../../styles/BlogEntries.css';
import { entryData } from '../../data/blogData';

export const BlogEntries = () => {
  return (
    <>
      {entryData.map((entry, index) => (
        <div key={index} className='blog-entry'>
          <h2>{entry.title}</h2>
          <img
            src={entry.image}
            alt={entry.title}
            className={entry.imageClass}
          />
          <p>{entry.text}</p>
        </div>
      ))}
    </>
  );
};
