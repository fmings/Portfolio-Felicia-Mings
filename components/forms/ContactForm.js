import React from 'react';
import { Button } from 'react-bootstrap';

export default function ContactForm() {
  return (
    <div className="contact-page">
      <h1 className="contact-header">Contact</h1>
      <h3>Reach out via email at mingsfelicia@gmail.com or connect with me on LinkedIn</h3>
      <div className="contact-button-group">
        <Button className="contact-button" passHref href="mailto:mingsfelicia@gmail.com">Email</Button>
        <Button className="contact-button" target="_blank" passHref href="https://www.linkedin.com/in/felicia-mings/">LinkedIn</Button>
      </div>
    </div>
  );
}
