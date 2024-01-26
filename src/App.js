import logo from './logo.svg';
import './App.css';
import React from 'react';
import Profile from '../src/images/profile.jpg';
import ImageGallery from './ImageGallery';
import Socials from './Socials';
import NameCover from './NameCover';
import GitHub from '../src/images/github.jpg'
import LinkedIn from '../src/images/Linkedin.jpg'
import LeetCode from '../src/images/leetcode.jpg'


function App() {
  return (
    <div className="container">
      {/* Spot 1 */}
      <div className="square">
        <NameCover/>
      </div>

      {/* Spot 2 */}
      <div className="square">

        <div className='MainText'>
        <div className='App-header'>
          <p style={{textAlign: 'center'  }}>About Me:</p>
        </div>
        <div className='MainText'>
        My love to challenge myself is why I chose to do my degree,
        <strong>Software Engineering with a Minor in Biomedical Engineering</strong>.
        During these courses I have done multiple projects with other 
        students to learn more about and create applications. I am 
        Currently Creating a Application that is able to read any researcher's biography from any source and
        constantly finds grants globally that relates to any professors
        line of research using Machine Learning. Project is a 
        collaboration with 5 other group members in an eight-month
        deadline for the University of Calgary Research Funding 
        Department.
        </div>
        </div>
      </div>

      {/* Spot 3 */}
      <div className="square">
        <div className='App-header'>
          <p style={{ textDecoration: 'underline' }}>Spot 3:</p>
        </div>
        <div className='MainText'>
          Content for Spot 3
        </div>
      </div>

      {/* Spot 4 */}
      <div className="bottom-square">
  <div className='App-header'>
    <p style={{ textAlign: 'center',  }}>Resume</p>
  </div>
  <div className='MainText'>
    <div className="button" style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={() => window.location.href = 'https://drive.google.com/file/d/1PuZ5FNw6qthkoH94axtujPLrQlWBmJGJ/view?usp=share_link'}>
        Resume
      </button>
    </div>
  </div>
</div>


      {/* Spot 5 */}
      <div className="bottom-square">
  <div className='App-header'>
    <p style={{ textAlign: 'center' }}>Socials</p>
  </div>
  <div className="social-icons">
    <div className="TextUnder-Image">
      <img src={GitHub} className="Socials-Pic" alt="Profile" />
      <p className="SocialText"><a href="https://github.com/ibrahim29asad">GitHub </a> </p>
    </div>
    <div className="TextUnder-Image">
      <img src={LinkedIn} className="Socials-Pic" alt="Profile" />
      <p className="SocialText"><a href="https://www.linkedin.com/in/iibrahimasad/">Linkedin </a> </p>
    </div>
    <div className="TextUnder-Image">
      <img src={LeetCode} className="Socials-Pic" alt="Profile" />
      <p className="SocialText"><a href="https://leetcode.com/user1833qc/">LeetCode </a> </p>
    </div>
  </div>
</div>

{/* <a href="https://github.com/ibrahim29asad">github </a> </p>
   
   <p className="SocialText"><a href="https://www.linkedin.com/in/iibrahimasad/">Linkedin </a> </p>
  <p className="SocialText"><a href="https://leetcode.com/user1833qc/">leetcode </a> </p> */}

      

      {/* Spot 6 */}
      <div className="bottom-square">

        <div className='MainText'>
        </div>
      </div>
    </div>
  );
}

export default App;

      //   My name is Ibrahim Asad. I a bit about myself is that I Love 
      //   to play Basketball, Anime, Sneakers, and learn about all types
      //  of topics and love to challenge myself. My love to challenge
      //   myself and try again is why I chose to do my degree, I chose 
      //   Software Engineering with a Minor in Biomedical Engineering.
      //   During these courses I have done multiple projects with other 
      //   students to learn more about and create applications. I am 
      //   Currently Creating a Application that is able to read any researcher's biography from any source and
      //   constantly finds grants globally that relates to any professors
      //   line of research using Machine Learning. Project is a 
      //   collaboration with 5 other group members in an eight-month
      //   deadline for the University of Calgary Research Funding 
      //   Department.