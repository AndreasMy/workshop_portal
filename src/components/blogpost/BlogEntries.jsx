import { entryData } from '../../data/blogData';

export const BlogEntries = () => {
  return (
    <div>
      {entryData.map((entry, index) => (
        <div key={index} className='blog-entry'>
          <h2>{entry.title}</h2>
          <img src={entry.image} alt={entry.title} />
          <p>{entry.text}</p>
        </div>
      ))}
    </div>
  );
};
