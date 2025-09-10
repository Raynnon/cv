import React from 'react';
import Logo from './Logo';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import reactLogo from '../../images/react.png';
import nodejsLogo from '../../images/nodejs.png';
import gitLogo from '../../images/git.png';
import photoshopLogo from '../../images/photoshop.png';
import figmaLogo from '../../images/figma.png';

const Skills = () => {
  return (
    <Container
      id="skills"
      className="bg-secondary pb-5"
      as="section"
      fluid
      style={{ padding: '0 20%' }}
    >
      <h2>Technical Skills</h2>
      <Row
        className="technologies justify-content-center justify-content-md-around mb-5"
        xs={3}
        md={5}
      >
        <Logo name="React" logo={reactLogo} showName />
        <Logo name="Node.js" logo={nodejsLogo} />
        <Logo name="Git" logo={gitLogo} showName />
        <Logo name="Photoshop" logo={photoshopLogo} showName />
        <Logo name="Figma" logo={figmaLogo} showName />
      </Row>
    </Container>
  );
};

export default Skills;
