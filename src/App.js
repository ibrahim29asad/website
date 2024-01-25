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
      <div className="sidenavleft">

       <img src={Profile} className="Profile-Pic" alt="Profile" /> 
      <div className='Sidebar-HeaderName'>     
      <p style={{ textDecoration: 'underline' }}>.Knowledge and Skills.</p>
      <div className='SideBar-MainText' >
      Knowledge in Swift, C, C++, Python, Java, Swing, JavaScript,
      React, HTML, CSS, Assembly, YAML, Dockers, NoSQL, Flask, GIT, 
      Regression Models, Classification Models, SQL, and MySQL.
      </div>
      <div className="button">
      <button onClick={() => window.location.href = 'https://drive.google.com/file/d/1PuZ5FNw6qthkoH94axtujPLrQlWBmJGJ/view?usp=sharing'}>Resume</button>
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
      I try to not live life with regrets. < br/>< br/>
      I am currently a student studying in Software Engineering. I have completed courses
      for Data Structures, Computer Organization and Architecture, and File and Database
       Management, Computer Networks, Software Architecture, Sensor Systems and Data 
       Analytics, and Software Testing, Reliability, and Quality, DataBases, Operating 
       Systems, Embedded, and several Machine Learning Classes. During these courses I 
       have done multiple projects with other students to learn more about and create 
       applications that use databases with MySQL. I have also created projects where I
      needed to make GUI applications and also web applications all in collaboration 
      with other students. I am also knowledgeable in creating Unit-Testing to make sure
      that programs run correctly. The tools I use are Visual Studio, Eclipse, FileZilla
      , MySQL, SQL, Git, GitHub, C, C++, Java, JavaScript, React, Express.js, Flask, 
      and HTML5 are the tools and languages I use. I also have knowledge of Swift for 
      IOS development using Xcode as the IDE.  <br /> <br />
      Currently Creating an Application that is able to read any researcher's biography
      from any source and constantly finds grants globally that relates to any
      professors line of research using Machine Learning. Project is a collaboration
      with 5 other group members in an eight-month deadline for the University of
      Calgary Research Funding Department.
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


      <div className="sidenavright">
  
      <div className='Sidebar-HeaderName'>     
            <div className="vertical-buttons">
            <button onClick={() => scrollToSection('name')}>Top</button>
            <button onClick={() => scrollToSection('me')}>About Me</button>
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
