import React from "react";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Project = ({ name, technologies, image, link }) => {
  let technoText = "";

  if (technologies) {
    technoText = "(" + technologies + ")";
  }

  return (
    <Col>
      <a href={link} class="text-decoration-none text-white">
        <Image src={image} alt={name} fluid rounded />
        <p class="mb-0">{name}</p>
        <p>{technoText}</p>
      </a>
    </Col>
  );
};

export default Project;
