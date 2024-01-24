import React, { useState } from 'react';
import Notification from './Notification';
interface UrlProps {
  url: string;
}

const CopyLogo: React.FC<UrlProps> = ({ url }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
    } catch (error) {
      console.error('Failed to copy URL to clipboard', error);
    }
  };

  return (
    <div onClick={handleCopy}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='icon icon-tabler icon-tabler-copy'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z' />
        <path d='M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1' />
      </svg>
      {isCopied && (
        <Notification className='fixed bottom-0 right-0 z-50'></Notification>
      )}
    </div>
  );
};
export default CopyLogo;
