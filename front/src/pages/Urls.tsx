import React from 'react';
import Urls from '../components/logged/Urls';
const UrlsPage: React.FC = () => {
  return (
    <div className='urls px-10 py-5 md:px-32 lg:px-72 '>
      <h1 className='mb-5 text-3xl font-bold'>My Urls</h1>
      <Urls />
    </div>
  );
};

export default UrlsPage;
