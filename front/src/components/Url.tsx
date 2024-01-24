import React from 'react';
import CopyLogo from './copy-logo';

interface UrlProps {
  id: number;
  title: string;
  visits: number;
  date: string;
  image: string;
  url: string;
}

const Url: React.FC<UrlProps> = ({ id, title, visits, date, image, url }) => {
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
        <div className='icons flex flex-row-reverse px-4 py-4'>
          <CopyLogo url={url}></CopyLogo>
          <a href={url}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-[1.6rem]'
              version='1.1'
              x='0px'
              y='0px'
              viewBox='0 0 100 125'
              enable-background='new 0 0 100 100'
            >
              <line
                fill='none'
                stroke='white'
                stroke-width='11'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-miterlimit='10'
                x1='86.639'
                y1='13.996'
                x2='47.897'
                y2='53.203'
              />
              <polyline
                fill='none'
                stroke='white'
                stroke-width='11'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-miterlimit='10'
                points='  63.978,12.674 87.359,12.674 87.359,35.899 '
              />
              <polyline
                fill='none'
                stroke='white'
                stroke-width='11'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-miterlimit='10'
                points='  48.367,23.04 16.242,23.04 16.242,84.881 78.083,84.881 78.082,52.755 '
              />
            </svg>
          </a>
        </div>
      </a>
    </div>
  );
};

export default Url;
