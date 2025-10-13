import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import florianImage from './florian-assante-small.png';
import computer from './computer.png';
import { profile } from '../../data/profile';
import { SECTIONS } from '../../constants';

/**
 * CV Header
 * Displays the title, introduction, and images
 */
const Header = () => {
  return (
    <Container id={SECTIONS.HEADER} as="header" fluid>
      <Row className="header-row">
        {/* Main column: Introduction text */}
        <Col xs={12} xl={8} className="header-col-main">
          <div className="header-content">
            <h1>{profile.title}</h1>
            <div>
              <p className="mt-3">{profile.introduction.paragraph1}</p>
              <p>{profile.introduction.rolesTitle}</p>
              <p>{profile.introduction.roles}</p>
              <p className="mt-3">{profile.introduction.contactMessage}</p>
            </div>
          </div>

          {/* Decorative computer image */}
          <Image
            id="computer"
            className="mt-1 position-absolute computer-image"
            src={computer}
            alt=""
            aria-hidden="true"
            fluid
            loading="eager"
          />
        </Col>

        {/* Right column: Profile picture */}
        <Col id="me" xl={4}>
          <Image
            id="myPicture"
            src={florianImage}
            alt=""
            aria-hidden="true"
            className="mt-5"
            fluid
            loading="eager"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
