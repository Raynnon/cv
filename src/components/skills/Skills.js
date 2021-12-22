import React from "react";
import Logo from "./Logo";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import materialUiLogo from "../../images/material-ui.png";
import reduxLogo from "../../images/redux.png";
import nextLogo from "../../images/next.png";
import reactLogo from "../../images/react.png";
import nodejsLogo from "../../images/nodejs.png";
import expressLogo from "../../images/express.png";
import mongodbLogo from "../../images/mongodb.png";
import linuxLogo from "../../images/linux.png";
import gitLogo from "../../images/git.png";
import photoshopLogo from "../../images/photoshop.png";
import figmaLogo from "../../images/figma.png";
import bootstrapLogo from "../../images/bootstrap.png";

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
        <Logo name="React" logo={reactLogo} showName />
        <Logo name="Redux" logo={reduxLogo} showName />
        <Logo name="Next.js" logo={nextLogo} />
        <Logo name="Material UI" logo={materialUiLogo} showName />
        <Logo name="Bootstrap" logo={bootstrapLogo} showName />
      </Row>

      <Row className="technologies justify-content-around mb-5" xs={3} md={5}>
        <Logo name="Node.js" logo={nodejsLogo} />
        <Logo name="Express.js" logo={expressLogo} />
        <Logo name="MongoDB" logo={mongodbLogo} showName />
      </Row>

      <Row className="technologies">
		<Logo name="Linux" logo={linuxLogo} showName />
        <Logo name="Git" logo={gitLogo} showName />
        <Logo name="Photoshop" logo={photoshopLogo} showName />
        <Logo name="Figma" logo={figmaLogo} showName />
      </Row>
    </Container>
  );
};

export default Skills;
