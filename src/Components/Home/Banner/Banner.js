import React from 'react';
import './Banner.css';
import profile from '../../../assets/images/profile.png';
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="position-relative">
      <div className="banner-content">
        <img src={profile} alt="" />
        <h2 className="pt-3">Hi, I am Mahamudul Hasan</h2>
        <p className="px-4">
          I am a frontend web developer. I can provide clean code and pixel
          perfect design. I also make website more & more interactive with web
          animations.
        </p>
        <div className="d-flex gap-2">
          <a
            href="https://github.com/mahmud035"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare size={36} />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmud035/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={36} />
          </a>
          <a
            href="https://www.facebook.com/mh.pavel.3"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare size={36} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
