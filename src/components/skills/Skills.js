import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Logo from './Logo';
import { skills } from '../../data/skills';
import { PAGE_TITLES, SECTIONS } from '../../constants';

/**
 * Technical Skills Section
 * Displays the list of skill logos
 */
const Skills = () => {
  return (
    <Container
      id={SECTIONS.SKILLS}
      className="bg-secondary pb-5 skills-container"
      as="section"
      fluid
    >
      <h2>{PAGE_TITLES.TECHNICAL_SKILLS}</h2>

      <Row
        className="technologies justify-content-center justify-content-md-around mb-5"
        xs={3}
        md={5}
      >
        {/* Display each skill */}
        {skills.map((skill) => (
          <Logo
            key={skill.name}
            name={skill.name}
            logo={skill.logo}
            showName={skill.showName}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
