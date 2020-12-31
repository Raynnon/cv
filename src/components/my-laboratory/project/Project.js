import React from "react";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Project = ({ name, image, link }) => {
  return (
    <Col>
      <a href={link} class="text-decoration-none text-white">
        <Image src={image} alt={name} fluid rounded />
        <p>{name}</p>
      </a>
    </Col>
  );
};

export default Project;
