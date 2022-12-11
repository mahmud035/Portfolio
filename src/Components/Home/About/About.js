import React from 'react';
import './About.css';
import SkillBar from 'react-skillbars';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [
    { type: 'HTML5', level: 93 },
    { type: 'CSS3', level: 85 },
    { type: 'Bootstrap', level: 85 },
    { type: 'Javascript', level: 80 },
    { type: 'React', level: 70 },
    { type: 'Firebase', level: 90 },
    { type: 'Node', level: 40 },
    { type: 'Express ', level: 55 },
    { type: 'MongoDB', level: 45 },
  ];

  const colors = {
    bar: '#72e2ae',
    title: {
      text: '#fff',
      background: '#294149',
    },
  };

  return (
    <section className="about-page">
      <div className="container">
        <div className="text-center py-4">
          <h1>About Me</h1>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="about-content-container">
          <div>
            <h3 className="fw-bold pb-4">Get to know me!</h3>
            <p>
              I'm a <strong>Frontend Web Developer</strong> building the
              Front-end of Websites and Web Applications that leads to the
              success of the overall product. Check out some of my work in the
              <strong> Projects</strong> section.
            </p>
            <p>
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community.
            </p>
            <p>
              I'm open to <strong>Job</strong> opportunities where I can
              contribute, learn and grow. If you have a good opportunity that
              matches my skills and experience then don't hesitate to
              <strong> contact</strong> me.
            </p>

            <Link to="/contact">
              <Button variant="info" className="px-4 py-2 text-white">
                Contact
              </Button>
            </Link>
          </div>
          <div>
            <h2 className="fw-bold pb-4">My Skills</h2>
            <SkillBar skills={skills} colors={colors} animationDelay={700} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
