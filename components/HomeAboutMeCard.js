import Link from 'next/link';
import React from 'react';
import { Button } from 'react-bootstrap';

export default function HomeAboutMeCard() {
  return (
    <div className="homepage-wrapper">
      <div className="about-me-intro-block">
        <div className="headshot-photo">Insert Photo Here</div>
        <div className="intro-headline">Hello, I&apos;m Felicia</div>
        <div className="about-me-intro">
          I am a multi-passionate individual with professional experience in Merchandising, Marketing, Project Management, Communications, and Web Development. I am currently learning to code at Nashville Software School. Explore my portfolio to see examples showcasing my design and coding skills!
        </div>
      </div>
      <div className="navigation-blocks" />
      <div className="navigation-block-button"><Link passHref href="/aboutme"><Button>About Me</Button></Link></div>
      <div className="navigation-block-button"><Link passHref href="/myresume"><Button>My Resume</Button></Link></div>
      <div className="navigation-block-button"><Link pssHref href="myprojects"><Button>My Projects</Button></Link></div>
    </div>

  );
}
