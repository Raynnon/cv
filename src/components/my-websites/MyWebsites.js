import React from 'react';
import Container from 'react-bootstrap/Container';

import ItemContent from './ItemContent';
import { projects } from '../../data/projects';
import { PAGE_TITLES, SECTIONS } from '../../constants';

/**
 * My Websites Section
 * Displays the list of portfolio projects/websites
 */
const MyWebsites = () => {
  return (
    <Container id={SECTIONS.WEBSITES} className="pr-0 pl-0" as="section" fluid>
      <h2>{PAGE_TITLES.MY_WEBSITES}</h2>

      {/* Display each project */}
      {projects.map((project) => (
        <ItemContent key={project.name} {...project} />
      ))}
    </Container>
  );
};

export default MyWebsites;
