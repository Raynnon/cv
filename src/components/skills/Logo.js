import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Logo = ({ name, logo, showName }) => {
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

export default Logo;
