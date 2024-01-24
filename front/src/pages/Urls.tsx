import React from 'react';
import Urls from '../components/logged/Urls';
const UrlsPage: React.FC = () => {
  return (
    <div className='urls mx-6 py-5 md:mx-[calc((100%-700px)/2)] lg:mx-[calc((100%-1120px)/2)] '>
      <h1 className='mb-5 text-3xl font-bold'>My Urls</h1>
      <Urls />
    </div>
  );
};

export default UrlsPage;
