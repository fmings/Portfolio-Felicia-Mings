import React from 'react';

export default function AboutMeCard() {
  return (
    <div className="about-me-page-wrapper">
      <div className="page-block">
        <div className="about-me-image-wrapper"><img className="about-me-image" src="/about-me-photo.jpg" alt="Felicia wearing floral dress" /></div>
        <div className="intro-text-block">
          <div className="headline-text">About Me</div>
          <div className="about-me-text">Hey there! Welcome to my portfolio. To introduce myself, my name is Felicia and I am currently a communications specialist working to transition into the software development and design world.
            I am a driven and dependable professional with multiple years of experience in merchandising, marketing, and project management. My projects have included designing a department newsletter, creating an online portal for a supplier base, and setting up an app for corporate events. In addition to my &apos;corporate&apos; work experience, I own a small, online boutique where I independently set up the Shopify store.
            Take a look around to see some of my work!
          </div>
        </div>
      </div>
    </div>
  );
}
