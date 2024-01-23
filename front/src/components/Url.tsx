import React from 'react';

interface UrlProps {
  id: number;
  title: string;
  visits: number;
  date: string;
  image: string;
}

const Url: React.FC<UrlProps> = ({ id, title, visits, date, image }) => {
  return (
    <div
      key={id}
      className='max-w rounded-lg border border-gray-700 bg-gray-800 duration-150 ease-in hover:scale-105'
    >
      <a className='' href='#'>
        <img className='rounded-t-lg' src={image} alt='' />

        <div className='p-5 '>
          <h5 className='mb-2 line-clamp-1 text-2xl font-bold tracking-tight text-white'>
            {title}
          </h5>
          <p className=' font-normal text-gray-400'>
            <span className='font-semibold'>Visits:</span> {visits}
          </p>
          <p className='font-normal text-gray-400'>
            <span className='font-semibold'>Date:</span> {date}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Url;
