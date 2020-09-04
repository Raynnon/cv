import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from 'react-bootstrap/Carousel';

import "./custom.scss";
import "./app.scss";

function App() {
  return (
    <Container fluid>
      {/* HEADER */}
      <Container id="header" className="coloured-section d-flex flex-column" as="header" fluid>
        <div className="my-auto">
          <h2 className="font-weight-bold">
            Hello, I am <span className="text-secondary">Florian Assante</span>
          </h2>
          <h1 className="font-weight-bold display-4">The self-made Web Developer.</h1>
          <div className="mt-5">
            <Button className="cta-button" variant="secondary" size="lg">
              Contact me
            </Button>
            <Button variant="outline-light" size="lg">
              Download CV
            </Button>
          </div>
        </div>
      </Container>

      {/* ABOUT ME */}
      <Container id="about" className="section" as="section"  fluid>
        <h3>About me</h3>
        <Row>
          <Col className="text-center mb-3" xl={6}>
            <Image
              id="my-face"
              src={require("./images/florian-assante.jpg")}
              alt="Florian Assante"
              fluid
              rounded
            />
          </Col>
          <Col xl={6}>
            <p id="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              lacinia erat id nisl efficitur condimentum. Nullam ac nisi at
              mauris dignissim tristique eu et justo. Nam maximus efficitur
              massa, eget mattis quam pellentesque ac. Etiam tincidunt congue
              fringilla. Nullam q uis lectus sapien. Praesent et mollis orci.
              Suspendisse et eros sapien. In eget dapibus lorem. Nunc in tortor
              dignissim, bibendum nibh a, porta risus.
            </p>
            <Row className="icons-row">
              <p className="hobbies">
                <i className="fas fa-globe-europe"></i> French
              </p>
              <p className="hobbies">
                <i className="fas fa-home"></i> Barcelona, Spain
              </p>
              <p className="hobbies">
                <i className="fas fa-language"></i> French, Spanish, English
              </p>
            </Row>
            <Row className="icons-row">
              <p className="hobbies">
                <i className="fas fa-plane-departure"></i> Travel
              </p>
              <p className="hobbies">
                <i className="fas fa-table-tennis"></i> Sports
              </p>
              <p className="hobbies">
                <i className="fas fa-gamepad"></i> Video Games
              </p>
              <p className="hobbies">
                <i className="fas fa-book-open"></i> Learning
              </p>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* SKILLS */}
      <Container
        id="skills"
        className="section coloured-section"
        as="section"
        fluid
      >
        <h3>Skills</h3>
        <h4>Front-end</h4>
        <Row className="technologies justify-content-around" xs={3} md={5} >
          <Col>
            <Image src={require("./images/html5.png")} />
            <p>HTML</p>
          </Col>
          <Col>
            <Image src={require("./images/css3.png")} />
            <p>CSS</p>
          </Col>
          <Col>
            <Image src={require("./images/bootstrap.png")} />
            <p>Bootstrap</p>
          </Col>
          <Col>
            <Image src={require("./images/react.png")} />
            <p>React JS</p>
          </Col>
          <Col>
            <Image src={require("./images/redux.png")} />
            <p>Redux</p>
          </Col>
        </Row>

        <h4>Back-end</h4>
        <Row className="technologies justify-content-around" xs={3} md={5}>
          <Col>
            <Image src={require("./images/nodejs.png")} />
            <p>NodeJS</p>
          </Col>
          <Col>
            <Image src={require("./images/express.png")} />
            <p>Express</p>
          </Col>
          <Col>
            <Image src={require("./images/mongodb.png")} />
            <p>MongoDB</p>
          </Col>
          <Col>
            <Image src={require("./images/mongoose.png")} />
            <p>Mongoose</p>
          </Col>
          <Col>
            <Image src={require("./images/database.png")} />
            <p>SQL</p>
          </Col>
        </Row>

        <h4>Utilities</h4>
        <Row className="technologies">
          <Col>
            <Image src={require("./images/linux.png")} />
            <p>Linux</p>
          </Col>
          <Col>
            <Image src={require("./images/git.png")} />
            <p>Git</p>
          </Col>
          <Col>
            <Image src={require("./images/npm.png")} />
            <p>NPM</p>
          </Col>
        </Row>
      </Container>

      {/* MY PROJECTS */}
      <Container id="websites" className="pr-0 pl-0 section" as="section" fluid>
        <h3>My Websites</h3>
        <Carousel className="pt-0 pb-0">
          <Carousel.Item>
            <Row xs={1} xl={2}>
              <Col className="my-auto">
                <h4>My CV</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                lacinia erat id nisl efficitur condimentum.</p>
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
                src={require("./images/cv.png")}
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                lacinia erat id nisl efficitur condimentum.</p>
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
                src={require("./images/cv.png")}
                alt="My CV"
                fluid
                />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel> 
      </Container>

      <Container
        id="projects"
        className="section coloured-section"
        as="section"
        fluid
      >
        <h3>Small Projects</h3>
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

      <Container id="footer" className="text-center pb-1 bg-dark" as="footer" fluid>
        <a href="#header">
          <Image src={require("./images/arrow-top.png")} alt="Top Arrow" />
        </a>
        <div id="social-networks" className="mt-3 mb-3">
          <a href="https://www.linkedin.com/in/florianassante/" className="mr-3">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Raynnon">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <p className="text-center">© 2020 - Florian Assante</p>
      </Container>
    </Container>
  );
}

export default App;
