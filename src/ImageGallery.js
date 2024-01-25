// ImageGallery.js
import React from 'react';
import './App.css'; // Import your CSS file for styling

const ImageGallery = () => {
  // Generate an array of image filenames within the 'vsco' folder
  const imageFilenames = Array.from({ length: 18 }, (_, index) => `vs${18 - index}.jpg`);

  // Custom text for each image
  const imageTexts = [
    '❄️',
    '',
    'I love me too',
    'Nov 17th, I saw Pascal Siakam, Scottie Barnes, and DRAKE',
    '',
    '',
    '',
    '',
    '',
    '',
    'Creps Cream Class 👟♟️',
    '🦢',
    '10-1 Years in YYC vs Stampede 🤠',
    '🇮🇹 x 🍨',
    '',
    '',
    '🐠 x🍦',
    '🌻 x 👟',

  ];

  return (
    <div className="image-gallery">
      {imageFilenames.map((filename, index) => (
        <div key={index} className="gallery-item">
          {/* Constructing the image URL based on the folder structure */}
          <img src={require(`../src/images/vsco/${filename}`)} alt={`Image ${index + 1}`} />
          <div className="overlay">
            <p>{imageTexts[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
