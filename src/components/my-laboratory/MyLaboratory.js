import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const MyLaboratory = () => {
  return (
    <Container
      id="projects"
      className="section coloured-section"
      as="section"
      fluid
    >
      <h3>My laboratory</h3>
      <Row xl={4} lg={3} xs={2}>
        <Col>
          <Image src="https://via.placeholder.com/200" fluid rounded />
          <p>Project</p>
        </Col>
        <Col>
          <Image src="https://via.placeholder.com/200" fluid rounded />
          <p>Project</p>
        </Col>
        <Col>
          <Image src="https://via.placeholder.com/200" fluid rounded />
          <p>Project</p>
        </Col>
        <Col>
          <Image src="https://via.placeholder.com/200" fluid rounded />
          <p>Project</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyLaboratory;
