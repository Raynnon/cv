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
import mongooseLogo from "../../images/mongoose.png";
import nginxLogo from "../../images/nginx.png";
import certbotLogo from "../../images/certbot.png";
import pm2Logo from "../../images/pm2.png";
import linuxLogo from "../../images/linux.png";
import gitLogo from "../../images/git.png";
import npmLogo from "../../images/npm.png";

const Skills = () => {
  return (
    <Container
      id="skills"
      className="section coloured-section"
      as="section"
      fluid
    >
      <h3>Skills</h3>
      <h4>Front-end</h4>
      <Row className="technologies justify-content-around" xs={3} md={5}>
        <Col>
          <Image src={htmlLogo} alt="html" />
          <p>HTML</p>
        </Col>
        <Col>
          <Image src={cssLogo} alt="css" />
          <p>CSS</p>
        </Col>
        <Col>
          <Image src={sassLogo} alt="bootstrap" />
          <p>Sass</p>
        </Col>
        <Col>
          <Image src={bootstrapLogo} alt="bootstrap" />
          <p>Bootstrap</p>
        </Col>
        <Col>
          <Image src={reactLogo} alt="react" />
          <p>React JS</p>
        </Col>
      </Row>

      <h4>Back-end</h4>
      <Row className="technologies justify-content-around" xs={3} md={5}>
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
        <Col>
          <Image src={mongooseLogo} alt="mongoose" />
          <p>Mongoose</p>
        </Col>
      </Row>
      <h4>Server</h4>
      <Row className="technologies">
        <Col>
          <Image src={nginxLogo} alt="linux" />
          <p>nginx</p>
        </Col>
        <Col>
          <Image src={certbotLogo} alt="git" />
          <p>certbot</p>
        </Col>
        <Col>
          <Image src={pm2Logo} alt="npm" />
          <p>pm2</p>
        </Col>
      </Row>
      <h4>Utilities</h4>
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
          <Image src={npmLogo} alt="npm" />
          <p>NPM</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
