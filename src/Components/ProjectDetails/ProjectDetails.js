import React, { useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import './ProjectDetails.css';
import { FaCode } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { Button } from 'react-bootstrap';
import Loading from '../Shared/Loading/Loading';

const ProjectDetails = () => {
  const project = useLoaderData();
  // console.log(project);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (project === {}) {
    return <Loading></Loading>;
  }

  const {
    name,
    image,
    images,
    fullDescriptions,
    liveSite,
    gitHubClient,
    gitHubServer,
    technologyUsed,
  } = project;

  return (
    <PhotoProvider>
      <div className="pb-5">
        <div className="container pb-5">
          <div className="photo-preview">
            {images.map((item, index) => (
              <PhotoView key={index} src={item}>
                {index < 4 ? (
                  <img
                    src={item}
                    key={index}
                    alt=""
                    className="preview-image"
                  />
                ) : undefined}
              </PhotoView>
            ))}
          </div>

          {/* Details Info */}
          <div className="project-card card h-100  border-0 shadow">
            <div className="row g-2">
              <div className="col-12 ">
                <img
                  src={image}
                  className="project-image rounded"
                  alt="Project Demo"
                />
              </div>
              <div className="col-12">
                <div className="card-body px-4">
                  <h2 className="card-title">{name}</h2>
                  <div>
                    {fullDescriptions.map((bulletPoint, index) => (
                      <div className="d-flex">
                        <li key={index}></li>
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
                        <FiExternalLink
                          size={22}
                          style={{ marginBottom: '2px', marginLeft: '5px' }}
                        />
                      </Button>
                    </a>
                    <a href={gitHubClient} target="_blank" rel="noreferrer">
                      <Button variant="outline-success" className="fw-semibold">
                        Github Client
                        <FaCode
                          size={22}
                          style={{ marginBottom: '2px', marginLeft: '5px' }}
                        />
                      </Button>
                    </a>
                    {gitHubServer && (
                      <a href={gitHubServer} target="_blank" rel="noreferrer">
                        <Button
                          variant="outline-success"
                          className="fw-semibold"
                        >
                          Github Server
                          <FaCode
                            size={22}
                            style={{ marginBottom: '2px', marginLeft: '5px' }}
                          />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ProjectDetails;
