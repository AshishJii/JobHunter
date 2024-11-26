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
import Applications from './components/Applications';
import Users from './components/Users';
import AdminJobs from './components/AdminJobs';

function App() {
  const { user, logout } = useAuth();

  console.log('-------------------');
  console.log('User:', user);
  console.log('-------------------');

  return (
    <div className='appContainer'>
      <nav className='navBar'>
        <div className="logo">JobHunter</div>
        <ul className='nav-links'>
          <li><Link to="/">Home</Link></li>
          {user ? (
            user.role === 'SEEKER' ? (
              // If user is SEEKER, show Jobs and MyProfile
              <>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/profile">My Profile</Link></li>
              </>
            ) : (
              // If user is ADMIN, show Applications and Users
              <>
                <li><Link to="/applications">Applications</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/adminJobs">Edit Jobs</Link></li>
              </>
            )
          ) : (
            // If no user, show Login and Register
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
          {user && (
            <li>
              <a
                href="#logout"
                onClick={(e) => {
                  e.preventDefault(); // Prevent page reload
                  logout();
                }}
                className="nav-link"
              >
                Logout
              </a>
            </li>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/users" element={<Users />} />
        <Route path="/adminJobs" element={<AdminJobs />} />
      </Routes>
    </div>
  );
}

export default App;
