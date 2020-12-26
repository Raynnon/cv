import React from "react";

import Container from "react-bootstrap/Container";
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
      <div className="my-auto">
        <h2 className="font-weight-bold">
          I am <span className="text-secondary">Florian</span>,
        </h2>
        <h1 className="font-weight-bold">
          a full stack Web Developper
        </h1>
        <div className="mt-5">
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
      </div>
    </Container>
  );
};

export default Header;
