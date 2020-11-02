import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default class ItemContent extends Component {
  liveLinkDisplay() {
    if (this.props.liveLink) {
      return (
        <Button
          href={this.props.liveLink}
          className="cta-button"
          variant="secondary"
          target="_blank"
        >
          See live
        </Button>
      );
    }
  }

  sourceLinkDisplay() {
    if (this.props.sourceLink) {
      return (
        <Button
          href={this.props.sourceLink}
          className="cta-button"
          variant="outline-dark"
          target="_blank"
        >
          Source code
        </Button>
      );
    }
  }

  render() {
    const { name, description, image } = this.props;

    return (
      <Row xs={1} xl={2}>
        <Col className="my-auto">
          <h4>{name}</h4>
          <p>{description}</p>
          <div>
            {this.liveLinkDisplay()}
            {this.sourceLinkDisplay()}
          </div>
        </Col>
        <Col className="carousel-image">
          <Image src={image} alt={name} fluid rounded />
        </Col>
      </Row>
    );
  }
}
