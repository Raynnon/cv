import React from "react";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const ItemContent = (props) => {
  const sourceCodeButton = (source) => {
    let desc = "Source Code";

    if (source === props.sourceLinkFront) {
      desc = "Front Source Code";
    } else if (source === props.sourceLinkBack) {
      desc = "Back Source Code";
    }

    return (
      <Button
        className="cta-second mb-2"
        variant="outline-primary"
        href={source}
        size="lg"
        style={{ fontSize: "1rem" }}
        target="_blank"
      >
        {desc}
      </Button>
    );
  };

  return (
    <Row className="websites">
      <Col xs={12} xl={6}>
        <Image
          className="website-image"
          src={props.image}
          alt={props.imageAlt}
          fluid
        />
      </Col>
      <Col xs={12} xl={6} className="d-flex flex-column justify-content-center">
        <h3>{props.name}</h3>
        <p className="description" style={{ fontSize: "1rem" }}>
          {props.description}
        </p>
        <Row className="justify-content-center">
          {props.liveLink ? (
            <Button
              className="cta-button mb-2"
              variant="primary"
              href={props.liveLink}
              size="lg"
              style={{ fontSize: "1rem" }}
              target="_blank"
            >
              See Live
            </Button>
          ) : (
            ""
          )}

          {props.sourceLink ? sourceCodeButton(props.sourceLink) : ""}
          {props.sourceLinkFront ? sourceCodeButton(props.sourceLinkFront) : ""}
          {props.sourceLinkBack ? sourceCodeButton(props.sourceLinkBack) : ""}
        </Row>
      </Col>
    </Row>
  );
};

export default ItemContent;
