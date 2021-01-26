import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

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
          <Image src={require("../../images/html5.png")} alt="html" />
          <p>HTML</p>
        </Col>
        <Col>
          <Image src={require("../../images/css3.png")} alt="css" />
          <p>CSS</p>
        </Col>
        <Col>
          <Image src={require("../../images/sass.png")} alt="bootstrap" />
          <p>Sass</p>
        </Col>
        <Col>
          <Image src={require("../../images/bootstrap.png")} alt="bootstrap" />
          <p>Bootstrap</p>
        </Col>
        <Col>
          <Image src={require("../../images/react.png")} alt="react" />
          <p>React JS</p>
        </Col>
      </Row>

      <h4>Back-end</h4>
      <Row className="technologies justify-content-around" xs={3} md={5}>
        <Col>
          <Image src={require("../../images/nodejs.png")} alt="node" />
          <p>NodeJS</p>
        </Col>
        <Col>
          <Image src={require("../../images/express.png")} alt="express" />
          <p>Express</p>
        </Col>
        <Col>
          <Image
            src={require("../../images/mongodb.png")}
            alt="mongodb"
            fluid
          />
          <p>MongoDB</p>
        </Col>
        <Col>
          <Image
            className="learning"
            src={require("../../images/mongoose.png")}
            alt="mongoose"
          />
          <p>Mongoose</p>
        </Col>
      </Row>
      <h4>Server</h4>
      <Row className="technologies">
        <Col>
          <Image src={require("../../images/nginx.png")} alt="linux" />
          <p>nginx</p>
        </Col>
        <Col>
          <Image src={require("../../images/certbot.png")} alt="git" />
          <p>certbot</p>
        </Col>
        <Col>
          <Image src={require("../../images/pm2.png")} alt="npm" />
          <p>pm2</p>
        </Col>
      </Row>
      <h4>Utilities</h4>
      <Row className="technologies">
        <Col>
          <Image src={require("../../images/linux.png")} alt="linux" />
          <p>Linux</p>
        </Col>
        <Col>
          <Image src={require("../../images/git.png")} alt="git" />
          <p>Git</p>
        </Col>
        <Col>
          <Image src={require("../../images/npm.png")} alt="npm" />
          <p>NPM</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
