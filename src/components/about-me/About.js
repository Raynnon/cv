import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <Container id="about" className="section" as="section" fluid>
      <h3>About me</h3>
      <Row>
        <Col className="text-center mb-3" xl={6}>
          <Image
            id="my-face"
            src={require("./florian-assante.jpg")}
            alt="Florian Assante"
            fluid
            rounded
          />
        </Col>
        <Col xl={6}>
          <p id="description">
            After working for several years in the field of webmarketing I
            discovered a pronounced taste for development. So I decided to jump
            in and to train myself thanks to numerous tutorials, exercises,
            documentation on the internet and the help of web developer friends.
            I am now looking for a first experience in a company that will give
            me the opportunity to develop myself in this field.
          </p>
          <Row className="icons-row">
            <p className="hobbies">
              <i className="fas fa-globe-europe"></i> French
            </p>
            <p className="hobbies">
              <i className="fas fa-home"></i> Barcelona, Spain
            </p>
            <p className="hobbies">
              <i className="fas fa-language"></i> French, Spanish, English
            </p>
          </Row>
          <Row className="icons-row">
            <p className="hobbies">
              <i className="fas fa-plane-departure"></i> Travel
            </p>
            <p className="hobbies">
              <i className="fas fa-table-tennis"></i> Sports
            </p>
            <p className="hobbies">
              <i className="fas fa-gamepad"></i> Video Games
            </p>
            <p className="hobbies">
              <i className="fas fa-book-open"></i> Learning
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
