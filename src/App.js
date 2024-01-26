import logo from './logo.svg';
import './App.css';
import React from 'react';
import Profile from '../src/images/profile.jpg';
import ImageGallery from './ImageGallery';
import Socials from './Socials';


function App() {
  return (
    <div className="container">
      {/* Spot 1 */}
      <div className="square">
        <div className='App-header'>
          <p style={{ textDecoration: 'underline' }}>Spot 1:</p>
        </div>
        <div className='MainText'>
          Content for Spot 1
        </div>
      </div>

      {/* Spot 2 */}
      <div className="square">

        <div className='MainText'>
        <div className='App-header'>
          <p style={{ textDecoration: 'underline' }}>About Me:</p>
        </div>
        <div className='MainText'>
        My name is Ibrahim Asad
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
      <div className="square">
        <div className='App-header'>
          <p style={{ textDecoration: 'underline' }}>Spot 4:</p>
        </div>
        <div className='MainText'>
          Content for Spot 4
        </div>
      </div>

      {/* Spot 5 */}
      <div className="square">
        <div className='App-header'>
          <p style={{ textDecoration: 'underline' }}>Spot 5:</p>
        </div>
        <div className='MainText'>
          Content for Spot 5
        </div>
      </div>

      {/* Spot 6 */}
      <div className="square">
        <div className='App-header'>
          <p style={{ textDecoration: 'underline' }}>Spot 6:</p>
        </div>
        <div className='MainText'>
          Content for Spot 6
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