import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import htmlLogo from "../../images/html5.png";
import cssLogo from "../../images/css3.png";
import sassLogo from "../../images/sass.png";
import bootstrapLogo from "../../images/bootstrap.png";
import reactLogo from "../../images/react.png";
import nodejsLogo from "../../images/nodejs.png";
import expressLogo from "../../images/express.png";
import mongodbLogo from "../../images/mongodb.png";
import linuxLogo from "../../images/linux.png";
import gitLogo from "../../images/git.png";
import photoshopLogo from "../../images/photoshop.png";
import figmaLogo from "../../images/figma.png";

const Skills = () => {
  return (
    <Container
      id="skills"
      className="bg-secondary text-center py-5"
      as="section"
      fluid
      style={{ padding: "0 20%" }}
    >
      <h2 className="mb-5">Skills</h2>
      <Row
        className="technologies justify-content-around justify-content-center mb-4"
        xs={3}
        md={5}
      >
        <Col>
          <Image src={reactLogo} alt="react" />
          <p>React JS</p>
        </Col>
        <Col>
          <Image src={htmlLogo} alt="html" />
          <p>HTML</p>
        </Col>
        <Col>
          <Image src={cssLogo} alt="css" />
          <p>CSS</p>
        </Col>
        <Col>
          <Image src={bootstrapLogo} alt="bootstrap" />
          <p>Bootstrap</p>
        </Col>
        <Col>
          <Image src={sassLogo} alt="sass" />
          <p>Sass</p>
        </Col>
      </Row>

      <Row className="technologies justify-content-around mb-4" xs={3} md={5}>
        <Col>
          <Image src={nodejsLogo} alt="node" />
          <p>NodeJS</p>
        </Col>
        <Col>
          <Image src={expressLogo} alt="express" />
          <p>Express</p>
        </Col>
        <Col>
          <Image src={mongodbLogo} alt="mongodb" fluid />
          <p>MongoDB</p>
        </Col>
      </Row>

      <Row className="technologies">
        <Col>
          <Image src={linuxLogo} alt="linux" />
          <p>Linux</p>
        </Col>
        <Col>
          <Image src={gitLogo} alt="git" />
          <p>Git</p>
        </Col>
        <Col>
          <Image src={photoshopLogo} alt="photoshop" />
          <p>Photoshop</p>
        </Col>
        <Col>
          <Image src={figmaLogo} alt="figma" />
          <p>Figma</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
