import React from 'react';

export default function AboutMeCard() {
  return (
    <div className="about-me-page-wrapper">
      <div className="page-block">
        <div className="about-me-image-wrapper">
          <img className="about-me-image" src="/about-me-photo.jpg" alt="Felicia wearing floral dress" />
        </div>
        <div className="intro-text-block">
          <div className="headline-text">About Me</div>
          <div className="about-me-text">Hey there! Welcome to my portfolio. To introduce myself, my name is Felicia and I am       currently a communications specialist working to transition into the technical industry through software development and design.
            As a creative problem-solver with over 10 years of experience in merchandising, I am now channeling that expertise into the tech world. My projects range from designing newsletters and presentations to partnering with IT on an online portal creation to building full-stack applications at Nashville Software School.
            I am passionate about building innovative software solutions and have recently completed the full-stack web development course at Nashville Software School. From managing high-impact projects to coding dynamic applications, I thrive on challenges and love bringing ideas to life through web development. I am excited to take the next step and grow my career as a software engineer.
            Take a look around to see some of my work!
          </div>
        </div>
      </div>
    </div>
  );
}
