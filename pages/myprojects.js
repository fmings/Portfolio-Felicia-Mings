import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import getProjects from '../api/projectsData';

export default function MyProjects() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    getProjects().then((projectData) => {
      const sortedProjects = projectData.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
      setProjects(sortedProjects);
    });
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="d-flex flex-wrap">

      {projects.map((project) => (<ProjectCard projectObj={project} key={project.firebaseKey} />))}

    </div>
  );
}
