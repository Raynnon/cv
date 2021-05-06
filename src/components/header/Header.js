import React from "react";
import HeaderModal from "./HeaderModal";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import florianImage from "./florian-assante.png";
import computer from "./computer.png";

import CV from "./CV-Florian-Assante-English-2021.pdf";

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container id="header" as="header" fluid>
      <Row>
        <Col xl={6} style={{ paddingTop: "8%" }}>
          <div style={{ padding: "0 24%" }}>
            <h1>
              Hi. I am <b>Florian</b>.
            </h1>
            <p>
              I am a <span className="font-weight-normal">web developer</span> &
              webmarketer. I am currently open to new projects so feel free to
              email me :)
            </p>

            <div className="mt-5 mb-5">
              <Button
                className="cta-button"
                variant="primary"
                size="lg"
                onClick={() => setModalShow(true)}
              >
                Contact me
              </Button>

              <HeaderModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

              <Button
                href={CV}
                download="CV - Florian Assante - English - 2021"
                variant="outline-primary"
                size="lg"
              >
                Download CV
              </Button>
            </div>
          </div>

          <Image
            className="mt-5 position-relative"
            src={computer}
            alt="computer"
            style={{ maxHeight: "100%", bottom: "0px" }}
            fluid
          />
        </Col>
        <Col className="mb-3 pr-0" xl={6}>
          <Image
            id="me"
            className="position-absolute"
            src={florianImage}
            alt="florian-assante"
            style={{ top: 0, right: 0, height: "80vh" }}
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
