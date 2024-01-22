import React from 'react';

interface HeroProps {
  // Propiedades del componente Hero, si las hay
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className='m mt-52 flex'>
      <div className='pr-[450px]'>
        <h2 className='w-[31rem] text-pretty text-6xl font-bold tracking-[.75px]'>
          Ready to shorten your link?
        </h2>
        <p className='mt-4 text-lg font-thin opacity-75'>
          Transform your links with analytics magic! Shorten now and witness the
          power of data-driven success.
        </p>
        <form className='mt-6 flex flex-row'>
          <input
            type='email'
            id='email'
            className='bg-opacity-1 block w-full rounded-lg  rounded-r-none  border-2 border-white  bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:bg-gray-700 dark:bg-opacity-50 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 '
            placeholder='http://localhost:5173/'
            required
          ></input>
          <button
            type='submit'
            className='w-full rounded-lg rounded-l-none border-2 border-l-0 border-white  bg-transparent px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto'
          >
            Submit
          </button>
        </form>
      </div>
      <div
        className=' -z-[1]  flex flex-row items-center
      '
      >
        <img
          className=' absolute -ml-[550px] w-[576px] opacity-[.7]'
          src='./rocket_preview.png'
          alt='hero'
        />
        {/* <img className='size-36' src='./3drenderScisors.png' alt='hero' /> */}
      </div>
    </div>
  );
};

export default Hero;
