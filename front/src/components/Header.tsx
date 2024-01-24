import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav className='fixed  start-0 top-0 z-20 w-full bg-transparent backdrop-blur-sm '>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 xl:flex-row xl:flex-wrap xl:items-center'>
          <a
            href='/'
            className='flex items-center justify-around space-x-3 rtl:space-x-reverse'
          >
            <img src='./logo url.png' className='-mr-1 h-10' alt='Lara Logo' />
            <div className='text-2xl font-semibold text-white'>Tiny-Short</div>
          </a>
          <div className='flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse'>
            <div className='flex w-48 justify-around'>
              <a
                href='/'
                className='rounded border-2 border-white bg-white px-4 py-2 font-bold  text-black transition duration-150 ease-in hover:bg-transparent hover:text-white'
              >
                Login
              </a>
              <a
                href='/'
                className='rounded border-[2px] border-white bg-transparent px-4 py-2 font-bold text-white transition duration-150 ease-in hover:bg-white hover:bg-cover hover:bg-fixed hover:text-black'
              >
                Sign Up
              </a>

              <div></div>
            </div>
            <button
              data-collapse-toggle='navbar-sticky'
              type='button'
              className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 md:hidden'
              aria-controls='navbar-sticky'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='h-5 w-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                ></path>
              </svg>
            </button>
          </div>
          <div
            className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
            id='navbar-sticky'
          >
            <ul className=' mt-4 flex flex-col rounded-lg border border-purple-700 bg-opacity-45 p-4 font-medium dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0  rtl:space-x-reverse'>
              <li>
                <a href='#about' className='block rounded px-3 py-2 text-white'>
                  About
                </a>
              </li>
              <li>
                <a
                  href='/profile'
                  className='block rounded px-3 py-2 text-white'
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
