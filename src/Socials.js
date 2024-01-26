import './App.css';
import React from 'react';
import GitHub from '../src/images/github.jpg'
import LinkedIn from '../src/images/Linkedin.jpg'
import LeetCode from '../src/images/leetcode.jpg'
import Instagram from '../src/images/instagram.jpg'
import TikTok from '../src/images/tiktok.jpg'
import ImageGallery from './ImageGallery';


const Socials = () => {
  
  return (
   
    <div className='SocialText'>
    <p>Socials: </p>
    <p><img src={GitHub} className="Socials-Pic" alt="Profile" />
    <a href="https://github.com/ibrahim29asad">github </a> </p>
   
    <p><img src={LinkedIn} className="Socials-Pic" alt="Profile" />
    <a href="https://www.linkedin.com/in/iibrahimasad/">Linkedin </a> </p>
    <p><img src={LeetCode} className="Socials-Pic" alt="Profile" />
    <a href="https://leetcode.com/user1833qc/">leetcode </a> </p>
   

    <p><img src={Instagram} className="Socials-Pic" alt="Profile" />
    <a href="https://www.instagram.com/ibrahim29asad/">instagram </a>  </p>
    

    <p><img src={TikTok} className="Socials-Pic" alt="Profile" />
    <a href="https://www.tiktok.com/@ibby_asd?_t=8jJfNXcJmgn&_r=1">tiktok </a> </p>
  
    </div>
    
  );
};


export default Socials;
