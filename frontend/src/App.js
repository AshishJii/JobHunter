import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Jobs from './components/Jobs';
import MyProfile from './components/MyProfile';

function App() {
  const { user, logout } = useAuth();
  return (
    <div className='appContainer'>
      <nav className='navBar'>
        <div className="logo">JobHunter</div>
        <ul className='nav-links'>
          <li><Link to="/">Home</Link></li>
          {user ? (
            <>
              <li><Link to="/jobs">Jobs</Link></li>
              <li><Link to="/profile">My Profile</Link></li>
              <li><a
                  href="#logout"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent page reload
                    logout();
                  }}
                  className="nav-link"
                >
                  Logout
                </a></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
