import React from 'react';
import Url from '../Url';

const URLS = [
  {
    id: 1,
    title: 'My page',
    visits: 100,
    uploadDate: '2024-01-23',
    image: '/example-1.jpg',
    url: 'https://example.com/page1',
  },
  {
    id: 2,
    title: 'Youtube video',
    visits: 200,
    uploadDate: '2024-01-22',
    image: '/example-1.jpg',
    url: 'https://youtube.com/video1',
  },
  {
    id: 3,
    title: 'Video to guapo con texto larguisimo',
    visits: 150,
    uploadDate: '2024-01-21',
    image: '/example-1.jpg',
    url: 'https://example.com/video2',
  },
  {
    id: 4,
    title: 'URL 4',
    visits: 300,
    uploadDate: '2024-01-20',
    image: '/example-1.jpg',
    url: 'https://example.com/url4',
  },
  {
    id: 5,
    title: 'URL 5',
    visits: 180,
    uploadDate: '2024-01-19',
    image: '/example-1.jpg',
    url: 'https://example.com/url5',
  },
  {
    id: 6,
    title: 'URL 6',
    visits: 250,
    uploadDate: '2024-01-18',
    image: '/example-1.jpg',
    url: 'https://example.com/url6',
  },
  {
    id: 7,
    title: 'URL 7',
    visits: 120,
    uploadDate: '2024-01-17',
    image: '/example-1.jpg',
    url: 'https://example.com/url7',
  },
  {
    id: 8,
    title: 'URL 8',
    visits: 280,
    uploadDate: '2024-01-16',
    image: '/example-1.jpg',
    url: 'https://example.com/url8',
  },
  {
    id: 9,
    title: 'URL 9',
    visits: 200,
    uploadDate: '2024-01-15',
    image: '/example-1.jpg',
    url: 'https://example.com/url9',
  },
  {
    id: 10,
    title: 'URL 10',
    visits: 150,
    uploadDate: '2024-01-14',
    image: '/example-1.jpg',
    url: 'https://example.com/url10',
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
          url={url.url}
        />
      ))}
    </div>
  );
};

export default Urls;
