import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

const MyWebsites = () => {
  return (
    <Container id="websites" className="pr-0 pl-0 section" as="section" fluid>
      <h3>My Websites</h3>
      <Carousel className="pt-0 pb-0">
        <Carousel.Item>
          <Row xs={1} xl={2}>
            <Col className="my-auto">
              <h4>My CV</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                lacinia erat id nisl efficitur condimentum.
              </p>
              <div>
                <Button className="cta-button" variant="secondary">
                  See live
                </Button>
                <Button className="cta-button" variant="outline-dark">
                  Source code
                </Button>
              </div>
            </Col>
            <Col className="carousel-image">
              <Image
                src={require("../../images/cv.png")}
                alt="My CV"
                fluid
                rounded
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={1} xl={2}>
            <Col className="my-auto">
              <h4>My CV</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                lacinia erat id nisl efficitur condimentum.
              </p>
              <div>
                <Button className="cta-button" variant="secondary">
                  See live
                </Button>
                <Button className="cta-button" variant="outline-dark">
                  Source code
                </Button>
              </div>
            </Col>
            <Col className="carousel-image">
              <Image src={require("../../images/cv.png")} alt="My CV" fluid />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default MyWebsites;
