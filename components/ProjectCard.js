import React from 'react';
import {
  Button, Card, Col, Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ProjectCard({ projectObj }) {
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        <Col key={projectObj.firebaseKey}>
          <Card style={{ width: '24rem', height: '37rem' }} className="project-card">
            <Card.Img variant="top" src={projectObj.image} />
            <Card.Body>
              <Card.Title>{projectObj.title}</Card.Title>
              <Card.Text className="description">
                {projectObj.description}
              </Card.Text>
              {projectObj.deployedLink ? (
                <Button className="project-card-button">
                  <a href={projectObj.deployedLink} target="_blank" rel="noopening noreferrer">
                    Visit App
                  </a>
                </Button>
              ) : ''}
              {projectObj.loomLink ? (
                <Button className="project-card-button">
                  <a href={projectObj.loomLink} target="_blank" rel="noopening noreferrer">
                    View Walk-through Video
                  </a>
                </Button>
              ) : ''}
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </div>
  );
}

ProjectCard.propTypes = {
  projectObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    deployedLink: PropTypes.string,
    loomLink: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
