import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './components/logged/Profile';
import Header from './components/Header';

const App = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  return (
    <Router>
      <div className='app'>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/profile'
            element={<Profile name={user.name} email={user.email} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
