import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const project = useLoaderData();
  console.log(project);

  const {
    name,
    image,
    images,
    descriptions,
    liveSite,
    gitHubClient,
    gitHubServer,
    technologyUsed,
  } = project;

  return (
    <PhotoProvider>
      <div>
        <div className="container">
          <div className="photo-preview">
            {images.map((item, index) => (
              <PhotoView key={index} src={item}>
                {index < 4 ? (
                  <img src={item} alt="" className="preview-image" />
                ) : undefined}
              </PhotoView>
            ))}
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ProjectDetails;
