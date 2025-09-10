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
        <Col xs={12} xl={8} style={{ paddingTop: '8%', position: 'relative' }}>
          <div style={{ padding: '0 21%', paddingBottom: '30vh' }}>
            <h1>Hi! I am Florian!</h1>
            <div>
              <p className="mt-3">
                Versatile professional with a passion for new technologies.
                Comfortable both on the technical side and in customer support.
              </p>
              <p>Interested in the following roles:</p>
              <p>
                Web Developer · IT Support · Tech Customer Success · Technical
                Sales
              </p>
              <p className="mt-3">
                Feel free to contact me if you think we can collaborate! :)
              </p>
            </div>
          </div>

          <Image
            id="computer"
            src={computer}
            alt=""
            aria-hidden="true"
            fluid
            loading="eager"
          />
        </Col>
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
