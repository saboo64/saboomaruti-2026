import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('password');
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle the login process
  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve user credentials from Local Storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Check if the input matches stored credentials
    if (email === 'admin@gmail.com' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid email or password');
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    // Clear the stored credentials and log out the user
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  // If the user is logged in, show a welcome message and logout button
  if (loggedIn) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700'>
        <div className='w-full p-8 bg-white rounded-lg shadow-md sm:w-96'>
          <h2 className='mb-6 text-3xl font-semibold text-center text-gray-800'>
            Welcome, {email}!
          </h2>
          <button
            onClick={handleLogout}
            className='w-full py-3 font-semibold text-white rounded-md bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 focus:outline-none'
          >
            Log Out
          </button>
        </div>
      </div>
    );
  }

  // If the user is not logged in, show the login form
  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700'>
      <div className='w-full p-8 bg-white rounded-lg shadow-md sm:w-96'>
        <h2 className='mb-6 text-3xl font-semibold text-center text-gray-800'>
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-600'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full p-3 mt-1 border-2 border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none'
              placeholder='you@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-600'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              className='w-full p-3 mt-1 border-2 border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none'
              placeholder='********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type='submit'
            className='w-full py-3 font-semibold text-white rounded-md bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 focus:outline-none'
          >
            Log In
          </button>
        </form>
        <p className='mt-4 text-sm text-center text-gray-600'>
          Don't have an account?{' '}
          <a href='#' className='text-blue-500'>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
