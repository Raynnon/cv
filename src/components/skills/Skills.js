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
      className="bg-secondary pb-5"
      as="section"
      fluid
      style={{ padding: "0 20%" }}
    >
      <h2>Skills</h2>
      <Row
        className="technologies justify-content-around justify-content-center mb-5"
        xs={3}
        md={5}
      >
        <Col className="animated">
          <Image src={reactLogo} alt="react" />
          <div className="middle">
            <p>React JS</p>
          </div>
        </Col>
        <Col className="animated">
          <Image src={htmlLogo} alt="html" />
          <div className="middle">
            <p>HTML</p>
          </div>
        </Col>
        <Col className="animated">
          <Image src={cssLogo} alt="css" />
          <div className="middle">
            <p>CSS</p>
          </div>
        </Col>
        <Col className="animated">
          <Image src={bootstrapLogo} alt="bootstrap" />
          <div className="middle mx-auto">
            <p>Bootstrap</p>
          </div>
        </Col>
        <Col>
          <Image src={sassLogo} alt="sass" />
        </Col>
      </Row>

      <Row className="technologies justify-content-around mb-5" xs={3} md={5}>
        <Col>
          <Image src={nodejsLogo} alt="node" />
        </Col>
        <Col>
          <Image src={expressLogo} alt="express" />
        </Col>
        <Col className="animated">
          <Image src={mongodbLogo} alt="mongodb" fluid />
          <div className="middle">
            <p>MongoDB</p>
          </div>
        </Col>
      </Row>

      <Row className="technologies">
        <Col className="animated">
          <Image src={linuxLogo} alt="linux" />
          <div className="middle">
            <p>Linux</p>
          </div>
        </Col>
        <Col className="animated">
          <Image src={gitLogo} alt="git" />
          <div className="middle">
            <p>Git</p>
          </div>
        </Col>
        <Col className="animated">
          <Image src={photoshopLogo} alt="photoshop" />
          <div className="middle">
            <p>Photoshop</p>
          </div>
        </Col>
        <Col className="animated">
          <Image src={figmaLogo} alt="figma" />
          <div className="middle">
            <p>Figma</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
