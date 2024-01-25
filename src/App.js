import logo from './logo.svg';
import './App.css';
import React from 'react';
import Profile from '../src/images/profile.jpg'
import ImageGallery from './ImageGallery';
import Socials from './Socials';

function App() {
  return (

    <div className="container"  >
      <div className="side-section"></div>
      
      <div className="main-section">
      <div className='HeaderName'>
      <p style={{ textDecoration: 'underline' }}>Ibrahim Asad</p>
      <p style={{ textDecoration: 'underline' }}>.about me.</p>
      <div className='MainText' >
      My name is Ibrahim Asad. I a bit about myself is that I Love to
      play Basketball, Anime, Sneakers, and learn about all types of topics and
      love to challenge myself. My love to challenge myself and try 
      again is why I chose to do my degree, I chose Software
      Engineering with a Minor in Biomedical Engineering. I have never
      taken any coding classes or even Biology classes in High School
      and never had any interest until I reached University, and 
      I try to do what excites me and not live life with regrets.  
      </div>
      <p style={{ textDecoration: 'underline' }}>.posts.</p>
      <ImageGallery />
      <p style={{ textDecoration: 'underline' }}>.technology.</p>

      </div>
      </div>




      <div className="side-section-left">
      {/* display: flex;
      justify-content: center; */}
      <img src={Profile} className="Profile-Pic" alt="Profile" />      
      <div className='Sidebar-HeaderName'>
      <p style={{ textDecoration: 'underline' }}> Skills and Languages Known:</p>
      <Socials />
      </div>
     
      
      </div>


    </div>
    



  );
}

export default App;
