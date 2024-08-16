import React from 'react';
import { Accordion, Button } from 'react-bootstrap';

export default function ResumeCard() {
  return (
    <div className="resume-page-wrapper">
      <div className="page-block resume-background">
        <div className="headline-text">Felicia Mings</div>
        <p>Software Development | Program Management</p>
        <div className="experience-section">
          <div className="section-header">Technical Experience</div>
          <Accordion defaultActiveKey="0" className="entry-accordian">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordian-header">Nashville Software School | Full Stack Software Developer</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Twelve-month software development bootcamp incorporating front-end and back-end, individual and group projects</li>
                  <li>Tech Stack: .Net, C#, React, JavaScript, HTML5, CSS, Bootstrap</li>
                  <li>Utilized the following tools on 13+ class projects
                    <ul>
                      <li>Git/GitHub for source code version control with 507 commits YTD</li>
                      <li>Agile/Scrum methodology for project management</li>
                      <li>CSS and Bootstrap for application styling</li>
                      <li>JSON for database/API integration</li>
                      <li>Postman for analyzing data and responses</li>
                      <li>Figma & dbDiagram for 3+ application designs with ERDs, wireframes, and flow charts</li>
                      <li>Dev Tools, documentation, research, and tickets for debugging</li>
                      <li>Netlify for deployment of 12 applications</li>
                    </ul>
                  </li>

                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="section-header">Professional Experience</div>
          <Accordion defaultActiveKey="0" className="entry-accordian">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordian-header">Tractor Supply Company | Merchandising Communications Specialist (Project Manager)</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Effectively manage a diverse portfolio of over 7 projects simultaneously, aimed at process improvement, digital integrations, and increasing vendor funding (such as Vendor Portal creation [UI/UX Design], DocuSign integration, ServiceNow process setup, creating reporting efficiencies, etc.)</li>
                  <li>Lead global communications with suppliers, internal departments, and cross-functional partners, resulting in a 7% increase in Team Engagement scores</li>
                  <li>Orchestrate the planning of annual TSC vendor partner conference and trade-show events hosting up to 4,000 attendees and have increased vendor funding support by over 50% since taking over the process in 2019 by implementing processes such as invite reviews, improving registration experience, defining an SOP, etc.</li>
                  <li>Created visually engaging PowerPoint presentations for leadership using Canva, Photoshop, and Office applications, contributing to over a 4% increase in Partner satisfaction survey results</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0" className="entry-accordian">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordian-header">Target | Senior Team Lead (Softlines)</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Led the team through new initiatives, transitions, and daily store operations</li>
                  <li>Planned and executed daily/weekly workload to deliver on department and store sales goals and guest engagement; decreased team member tardiness by 50%</li>
                  <li>Styled mannequins and visual displays to enhance brand visibility and drive sales</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="section-header">Education</div>
          <div>
            <div className="education-subsection">
              <p className="education-subheader">Nashville Software School</p>
              <p className="education-description">Full Stack Software Development</p>
            </div>
            <div className="education-subsection">
              <p className="education-subheader">University of Kentucky</p>
              <p className="education-description">Bachelor of Science in Merchandising, Apparel, and Textiles</p>
              <p className="education-description">Bachelor of Business Administration in Marketing</p>
            </div>
          </div>
        </div>
        <div className="resume-button-group">
          <Button className="resume-button" passHref href="myprojects">My Projects</Button>
          <Button className="resume-button" target="_blank" passHref href="https://github.com/fmings">My GitHub</Button>
          <Button className="resume-button" target="_blank" passHref href="https://www.linkedin.com/in/felicia-mings/">My LinkedIn</Button>
        </div>

      </div>
    </div>
  );
}
