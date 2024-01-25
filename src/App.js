import logo from './logo.svg';
import './App.css';
import React from 'react';
import Profile from '../src/images/profile.jpg'
import GitHub from '../src/images/github.jpg'
import LinkedIn from '../src/images/Linkedin.jpg'
import LeetCode from '../src/images/leetcode.jpg'
import Instagram from '../src/images/instagram.jpg'
import TikTok from '../src/images/tiktok.jpg'
import ImageGallery from './ImageGallery';

function App() {
  return (

    <div className="container">
      {/* <div className="side-section"></div> */}
      
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




      <div className="side-section">
  
      
      <div className='SocialText'>
      <img src={Profile} className="Profile-Pic" alt="Profile" />


      <div className='SocialText'>
      <p>Socials: </p>
      <p><img src={GitHub} className="Socials-Pic" alt="Profile" />
      <a href="https://github.com/ibrahim29asad">github </a> -  </p>
      https://github.com/ibrahim29asad

      <p><img src={LinkedIn} className="Socials-Pic" alt="Profile" />
      <a href="https://www.linkedin.com/in/iibrahimasad/">Linkedin </a> -  </p>
      https://www.linkedin.com/in/iibrahimasad/

      <p><img src={LeetCode} className="Socials-Pic" alt="Profile" />
      <a href="https://leetcode.com/user1833qc/">leetcode </a> -  </p>
      https://leetcode.com/user1833qc/

      <p><img src={Instagram} className="Socials-Pic" alt="Profile" />
      <a href="https://www.instagram.com/ibrahim29asad/">instagram </a>  </p>
      

      <p><img src={TikTok} className="Socials-Pic" alt="Profile" />
      <a href="https://www.tiktok.com/@ibby_asd?_t=8jJfNXcJmgn&_r=1">tiktok </a> </p>
    
      </div>
      </div>
      </div>


    </div>
    



  );
}

export default App;
