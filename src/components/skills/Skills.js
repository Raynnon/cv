import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import reduxLogo from "../../images/redux.png";
import nextLogo from "../../images/next.png";
import sassLogo from "../../images/sass.png";
import TailwindLogo from "../../images/tailwind.svg";
import reactLogo from "../../images/react.png";
import nodejsLogo from "../../images/nodejs.png";
import expressLogo from "../../images/express.png";
import mongodbLogo from "../../images/mongodb.png";
import linuxLogo from "../../images/linux.png";
import gitLogo from "../../images/git.png";
import photoshopLogo from "../../images/photoshop.png";
import figmaLogo from "../../images/figma.png";

const Skills = () => {
  const logo = (name, logo, showName) => {
    return (
      <Col className="overlay-container text-center position-relative">
        {showName ? (
          <Image
            src={logo}
            alt={name}
            className="overlay-img"
            width="64"
            height="64"
          />
        ) : (
          <Image src={logo} alt={name} width="64" height="64" />
        )}
        {showName ? (
          <div
            className="position-absolute text-dark overlay"
            style={{ top: 7, left: 0, right: 0, bottom: 0 }}
          >
            <p className="text-center fw-bolder">{name}</p>
          </div>
        ) : null}
      </Col>
    );
  };

  const technoRow1 = [
    { name: "React", logo: reactLogo, showName: true },
    { name: "Redux", logo: reduxLogo, showName: true },
    { name: "Next.js", logo: nextLogo, showName: false },
    { name: "Tailwind", logo: TailwindLogo, showName: true }
  ];

  const technoRow2 = [
    { name: "Node.js", logo: nodejsLogo, showName: false },
    { name: "Express.js", logo: expressLogo, showName: false },
    { name: "MongoDB", logo: mongodbLogo, showName: true }
  ];

  const technoRow3 = [
    { name: "Linux", logo: linuxLogo, showName: true },
    { name: "Git", logo: gitLogo, showName: true },
    { name: "Photoshop", logo: photoshopLogo, showName: true },
    { name: "Figma", logo: figmaLogo, showName: true }
  ];

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
        {technoRow1.map((techno) => {
          return logo(techno.name, techno.logo, techno.showName);
        })}
      </Row>

      <Row className="technologies justify-content-around mb-5" xs={3} md={5}>
        {technoRow2.map((techno) => {
          return logo(techno.name, techno.logo, techno.showName);
        })}
      </Row>

      <Row className="technologies">
        {technoRow3.map((techno) => {
          return logo(techno.name, techno.logo, techno.showName);
        })}
      </Row>
    </Container>
  );
};

export default Skills;
