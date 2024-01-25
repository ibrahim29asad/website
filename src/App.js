import logo from './logo.svg';
import './App.css';
import React from 'react';
import Profile from '../src/images/profile.jpg'
import ImageGallery from './ImageGallery';
import Socials from './Socials';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (

    <div className="container"  >
      <div className="side-section">

       <img src={Profile} className="Profile-Pic" alt="Profile" /> 
      <div className='Sidebar-HeaderName'>     
      <p style={{ textDecoration: 'underline' }}>.Knowledge and Skills.</p>
      <div className='SideBar-MainText' >
      Knowledge in Swift, C, C++, Python, Java, Swing, JavaScript,
      React, HTML, CSS, Assembly, YAML, Dockers, NoSQL, Flask, GIT, 
      Regression Models, Classification Models, SQL, and MySQL.
      </div>
      <div className="button">
      <button onClick={() => window.location.href = 'https://drive.google.com/file/d/1OS5OGnpZ5POfOqTbdriz6TQCLOZtUbsn/view?usp=sharing'}>Resume</button>
    </div>
    
      </div>
        
      </div>
      
      <div className="main-section">
      <div className='HeaderName'>
      <section id="name">
      <p style={{ textDecoration: 'underline' }}>Ibrahim Asad</p>
      </section>
      
      <section id="me">
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
      </section>

      <section id="technology">
      <p style={{ textDecoration: 'underline' }}>.technology.</p>
      <div className='MainText' >
      What I use to Program: <br />
      - Macbook Pro M2 Pro (32 GB Ram) <br />
      - IPad Pro 11 inch<br />
      - AirPods Pro 2<br />
      </div>

      <section id="posts">
      <p style={{ textDecoration: 'underline' }}>.posts.</p>
      <ImageGallery />
      </section>

      <div className='MainText' >
      <br />
      <br />
      ibrahim asad, 2024, <br />
      updated: Jan 2024
      <br />
      <br />


      </div>

 
      </section>

      </div>
      </div>




      <div className="side-section">
  
      <div className='Sidebar-HeaderName'>     
            <div className="vertical-buttons">
            <button onClick={() => scrollToSection('ibrahim_asad')}>Top</button>
            <button onClick={() => scrollToSection('about_me')}>About Me</button>
            <button onClick={() => scrollToSection('technology')}>Technology</button>
            <button onClick={() => scrollToSection('posts')}>Posts</button>
            
          </div> 
      <Socials />
      </div>
     
      
      </div>


    </div>
    



  );
}

export default App;
