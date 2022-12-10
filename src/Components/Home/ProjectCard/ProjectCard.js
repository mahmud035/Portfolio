import React from 'react';
import { Button } from 'react-bootstrap';
import './ProjectCard.css';
import { FaCode } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const {
    name,
    image,
    descriptions,
    liveSite,
    gitHubClient,
    gitHubServer,
    technologyUsed,
  } = project;

  return (
    <div>
      <div className="project-card card h-100  border-0 shadow-sm">
        <div className="row g-2">
          <div className="col-md-5">
            <img
              src={image}
              className="project-image rounded"
              alt="Project Demo"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <div>
                {descriptions.map((bulletPoint, index) => (
                  <div className="d-flex">
                    <li></li>
                    <p key={index}>{bulletPoint}</p>
                  </div>
                ))}
              </div>

              <div className="all-technology ">
                {technologyUsed.map((technology, index) => (
                  <>
                    <span className="fw-semibold technology" key={index}>
                      {technology}
                    </span>
                  </>
                ))}
              </div>

              <div className="py-4 d-flex flex-wrap gap-2">
                <a href={liveSite} target="_blank" rel="noreferrer">
                  <Button variant="outline-success" className="fw-semibold">
                    Live Website
                  </Button>
                </a>
                <a href={gitHubClient} target="_blank" rel="noreferrer">
                  <Button variant="outline-success" className="fw-semibold">
                    Github Client <FaCode size={22} />
                  </Button>
                </a>
                <a href={gitHubServer} target="_blank" rel="noreferrer">
                  <Button variant="outline-success" className="fw-semibold">
                    Github Server <FaCode size={22} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
