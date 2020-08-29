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
      <Container id="header" as="header" fluid>
        <h2>Hello, I am <span id="me">Florian Assante</span></h2>
        <h1>The self-made Web Developer.</h1>
        <Button class="header-button" variant="secondary" size="lg">Contact me</Button>
        <Button class="header-button" variant="outline-light" size="lg">Download CV</Button>
      </Container>

      <Container id="about" as="section">
        <h3>About me</h3>
        <Row>
          <Col>
            <Image id="me" src={require("./images/florian-assante.png")} fluid rounded />
          </Col>
          <Col>
            <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia erat id nisl efficitur 
condimentum. Nullam ac nisi at mauris dignissim tristique eu et justo. Nam maximus 
efficitur massa, eget mattis quam pellentesque ac. Etiam tincidunt congue fringilla. Nullam q
uis lectus sapien. Praesent et mollis orci. Suspendisse et eros sapien. In eget dapibus lorem. 
Nunc in tortor dignissim, bibendum nibh a, porta risus.</p>
            <Row>
              <p class="hobbies"><i class="fas fa-globe-europe"></i> French</p>
              <p class="hobbies"><i class="fas fa-home"></i> Spain</p>
              <p class="hobbies"><i class="fas fa-language"></i> French, Spanish, English</p>
            </Row>
            <Row>
              <p class="hobbies"><i class="fas fa-plane-departure"></i> Travel</p>
              <p class="hobbies"><i class="fas fa-table-tennis"></i> Sports</p>
              <p class="hobbies"><i class="fas fa-gamepad"></i> Video Games</p>
              <p class="hobbies"><i class="fas fa-book-open"></i> Learning</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;