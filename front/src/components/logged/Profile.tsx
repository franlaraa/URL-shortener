// Profile.js
import React, { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [username, setUsername] = useState('johndoe');
  const [email, setEmail] = useState('john.doe@example.com');

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleDeleteAccount = () => {
    // Implementa tu lógica para eliminar la cuenta aquí
    console.log('Cuenta eliminada!');
  };

  return (
    <div className='container mx-auto mt-8 max-w-md rounded-lg bg-[#1e1f20] p-6 opacity-80 shadow-xl shadow-white'>
      <div className='mb-8 text-center'>
        <img
          src='/profile-meme.jpg'
          alt='Profile'
          className='mx-auto w-48 rounded-full'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='name'
          className='font-semibold tracking-wide text-white'
        >
          Nombre
        </label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={handleNameChange}
          className='w-full rounded-md border border-[#2d2e2f] bg-[#2d2e2f] p-2 text-white focus:border-blue-300 focus:outline-none focus:ring focus:ring-white'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='username'
          className='font-semibold tracking-wide text-white'
        >
          Usuario
        </label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={handleUsernameChange}
          className='w-full rounded-md border border-[#2d2e2f] bg-[#2d2e2f] p-2 text-white focus:border-blue-300 focus:outline-none focus:ring focus:ring-white'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='email'
          className='font-semibold tracking-wide text-white'
        >
          Correo
        </label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={handleEmailChange}
          className='w-full rounded-md border border-[#2d2e2f] bg-[#2d2e2f] p-2 text-white focus:border-blue-300 focus:outline-none focus:ring focus:ring-white'
        />
      </div>

      <div className='mb-8'>
        <button
          className='rounded-md bg-red-500 px-4 py-2 text-gray-100 hover:bg-red-600'
          onClick={handleDeleteAccount}
        >
          Danger Zone: Eliminar Cuenta
        </button>
      </div>
    </div>
  );
};

export default Profile;
