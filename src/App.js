import React from 'react';

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import './custom.scss';
import './app.scss';



function App() {
  return (
    /* Header */
    <Container fluid>
      <Container id="header" className="coloured-section" as="header" fluid>
        <h2>Hello, I am <span id="me">Florian Assante</span></h2>
        <h1>The self-made Web Developer.</h1>
        <Button className="header-button" variant="secondary" size="lg">Contact me</Button>
        <Button className="header-button" variant="outline-light" size="lg">Download CV</Button>
      </Container>

      <Container id="about" as="section" className="section" fluid>
        <h3>About me</h3>
        <Row>
          <Col>
            <Image id="me" src={require("./images/florian-assante.jpg")} fluid rounded />
          </Col>
          <Col>
            <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia erat id nisl efficitur 
condimentum. Nullam ac nisi at mauris dignissim tristique eu et justo. Nam maximus 
efficitur massa, eget mattis quam pellentesque ac. Etiam tincidunt congue fringilla. Nullam q
uis lectus sapien. Praesent et mollis orci. Suspendisse et eros sapien. In eget dapibus lorem. 
Nunc in tortor dignissim, bibendum nibh a, porta risus.</p>
            <Row className="icons-row">
              <p className="hobbies"><i className="fas fa-globe-europe"></i> French</p>
              <p className="hobbies"><i className="fas fa-home"></i> Barcelona, Spain</p>
              <p className="hobbies"><i className="fas fa-language"></i> French, Spanish, English</p>
            </Row>
            <Row className="icons-row">
              <p className="hobbies"><i className="fas fa-plane-departure"></i> Travel</p>
              <p className="hobbies"><i className="fas fa-table-tennis"></i> Sports</p>
              <p className="hobbies"><i className="fas fa-gamepad"></i> Video Games</p>
              <p className="hobbies"><i className="fas fa-book-open"></i> Learning</p>
            </Row>
          </Col>
        </Row>
      </Container>
      
      <Container id="skills" className="section coloured-section" as="section" fluid>
        <h3>Skills</h3>
          <h4>Front-end</h4>
          <Row>
            <Col>
              <Image id="me" src={require("./images/html5.png")} />
              <p>HTML</p>
            </Col>
            <Col>
              <Image id="me" src={require("./images/css3.png")} />
              <p>CSS</p>
            </Col>
            <Col>
              <Image id="me" src={require("./images/bootstrap.png")} />
              <p>Bootstrap</p>
            </Col>
            <Col>
              <Image id="me" src={require("./images/react.png")} />
              <p>React JS</p>
            </Col>
            <Col>
              <Image id="me" src={require("./images/express.png")} />
              <p>Express</p>
            </Col>
          </Row>
         
        <h4>Back-end</h4>
          <Row>
            <Col>
              <Image src={require("./images/nodejs.png")} />
              <p>NodeJS</p>
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
          <Row>
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
    </Container>
  );
}

export default App;