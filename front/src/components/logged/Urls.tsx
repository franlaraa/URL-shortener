import React from 'react';
import Url from '../Url';

const URLS = [
  {
    id: 1,
    title: 'My page',
    visits: 100,
    uploadDate: '2024-01-23',
    image: '/example-1.jpg',
  },
  {
    id: 2,
    title: 'Youtube video',
    visits: 200,
    uploadDate: '2024-01-22',
    image: '/example-1.jpg',
  },
  {
    id: 3,
    title: 'Video to guapo con texto larguisimo',
    visits: 150,
    uploadDate: '2024-01-21',
    image: '/example-1.jpg',
  },
  {
    id: 4,
    title: 'URL 4',
    visits: 300,
    uploadDate: '2024-01-20',
    image: '/example-1.jpg',
  },
  {
    id: 5,
    title: 'URL 5',
    visits: 180,
    uploadDate: '2024-01-19',
    image: '/example-1.jpg',
  },
  {
    id: 6,
    title: 'URL 6',
    visits: 250,
    uploadDate: '2024-01-18',
    image: '/example-1.jpg',
  },
  {
    id: 7,
    title: 'URL 7',
    visits: 120,
    uploadDate: '2024-01-17',
    image: '/example-1.jpg',
  },
  {
    id: 8,
    title: 'URL 8',
    visits: 280,
    uploadDate: '2024-01-16',
    image: '/example-1.jpg',
  },
  {
    id: 9,
    title: 'URL 9',
    visits: 200,
    uploadDate: '2024-01-15',
    image: '/example-1.jpg',
  },
  {
    id: 10,
    title: 'URL 10',
    visits: 150,
    uploadDate: '2024-01-14',
    image: '/example-1.jpg',
  },
];

const Urls: React.FC = () => {
  return (
    <div className='grid grid-cols-2 gap-4  md:grid-cols-3 lg:grid-cols-4'>
      {URLS.map((url) => (
        <Url
          key={url.id}
          id={url.id}
          title={url.title}
          visits={url.visits}
          date={url.uploadDate}
          image={url.image}
        />
      ))}
    </div>
  );
};

export default Urls;
