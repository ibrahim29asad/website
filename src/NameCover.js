import React, { useState } from 'react';
import Profile from '../src/images/profile.jpg';
import './App.css'; // Import your main CSS file

function NameCover() {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className={`square ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className='App-header'>
        <p style={{ textAlign: 'center' }}>Ibrahim Asad</p>
      </div>
      
      <img src={Profile} className="Profile-Pic" alt="Profile" />
    </div>
  );
}

export default NameCover;
