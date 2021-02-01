import React from "react";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Footer = () => {
  return (
    <Container
      id="footer"
      className="text-center pb-1 bg-dark"
      as="footer"
      fluid
    >
      <a href="#header">
        <Image src={require("../../images/arrow-top.png")} alt="Top Arrow" />
      </a>
      <div id="social-networks" className="mt-3 mb-3">
        <a href="https://www.linkedin.com/in/florianassante/" className="mr-3">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/Raynnon">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p className="text-center">© 2020 - Florian Assante</p>
    </Container>
  );
};

export default Footer;
