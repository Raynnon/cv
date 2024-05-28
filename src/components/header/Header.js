import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import florianImage from './florian-assante-small.png';
import computer from './computer.png';

/* import CV from "./CV-Florian-Assante-English-2021.pdf"; */

const Header = () => {
  return (
    <Container id="header" as="header" fluid>
      <Row style={{ height: '100%' }}>
        <Col xs={12} xl={8} style={{ paddingTop: '8%' }}>
          <div style={{ padding: '0 21%' }}>
            <h1>
              Hi. I am <b>Florian</b>.
            </h1>
            <p id="introduction" className="mt-3">
              I am a <span className="font-weight-normal">web developer</span> &
              webmarketer. I am currently open to new projects so feel free to
              email me! :)
            </p>
          </div>

          <Image
            id="computer"
            className="mt-1 position-absolute"
            src={computer}
            alt="computer"
            style={{ height: '30%', bottom: 0 }}
            fluid
          />
        </Col>
        <Col id="me" xl={4}>
          <Image
            id="myPicture"
            src={florianImage}
            alt="florian-assante"
            className="mt-5"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
