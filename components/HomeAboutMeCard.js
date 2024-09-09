import Link from 'next/link';
import React from 'react';
import { Button } from 'react-bootstrap';

export default function HomeAboutMeCard() {
  return (
    <div className="homepage-wrapper">
      <div className="about-me-intro-block page-block">
        <div className="headshot-photo"><img className="profile-image" src="/HEADSHOT.png" alt="headshot of Felicia" /></div>
        <div className="intro-text-block">
          <div className="headline-text">Hello, I&apos;m Felicia</div>
          <div className="about-me-intro">
            I am a multi-passionate individual with professional experience in Merchandising, Marketing, Project Management, Communications, and Web Development. I am currently learning to code at Nashville Software School. Explore my portfolio to see examples showcasing my design and coding skills!
          </div>
        </div>
      </div>
      <div className="navigation-blocks">
        <div><Link passHref href="/aboutme"><Button className="navigation-block-button">About<br /> Me</Button></Link></div>
        <div><Link passHref href="/myresume"><Button className="navigation-block-button">My Experience</Button></Link></div>
        <div><Link passHref href="/myprojects"><Button className="navigation-block-button last">My Projects</Button></Link></div>
      </div>
    </div>

  );
}
