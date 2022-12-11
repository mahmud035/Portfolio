import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

const Projects = () => {
  const url = 'https://portfolio-server-steel.vercel.app/projects';

  const {
    isLoading,
    isError,
    data: projects,
    error,
  } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <section id="project">
      <div className="container">
        <h1 className="text-center py-5">Projects</h1>

        <div className="projects-card-container ">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project}></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
