import React from "react";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Project = ({ name, technologies, image, link }) => {
  return (
    <Col>
      <a
        href={link}
        className="text-decoration-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={image} alt={name} fluid />
        <h3 className="mt-2 mb-0" style={{ fontSize: "1.2rem" }}>
          {name}
        </h3>
        <p style={{ fontSize: "1rem" }}>{technologies}</p>
      </a>
    </Col>
  );
};

export default Project;
