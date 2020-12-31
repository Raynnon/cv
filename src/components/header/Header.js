import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import CV from "./CV-FlorianAssante-English-2020.pdf";

const Header = () => {
  return (
    <Container
      id="header"
      className="coloured-section d-flex flex-column"
      as="header"
      fluid
    >
      <Row className="my-auto">
        <Col xl={6}>
          <h2 className="font-weight-bold">
            I am <span className="text-secondary">Florian</span>,
          </h2>
          <h1 className="font-weight-bold">a full stack Web Developper</h1>
          <div className="mt-5 mb-5">
            <Button
              className="cta-button"
              variant="secondary"
              size="lg"
              target="blank"
            >
              Contact me
            </Button>
            <Button
              href={CV}
              download="CV - Florian Assante - English - 2020"
              variant="outline-light"
              size="lg"
            >
              Download CV
            </Button>
          </div>
        </Col>
        <Col className="text-center mb-3" xl={6}>
          <Image
            style={{ maxWidth: "200px" }}
            id="my-face"
            src={require("../../images/florian-assante.png")}
            alt="Florian Assante"
            fluid
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
