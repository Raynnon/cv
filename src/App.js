import React from "react";

import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import MyWebsites from "./components/my-websites/MyWebsites";
/* import MyLaboratory from "./components/my-laboratory/MyLaboratory"; */
import Footer from "./components/footer/Footer";

import Container from "react-bootstrap/Container";

import "./custom.scss";
import "./app.scss";

export default function App() {
  return (
    <Container fluid>
      <Header />
      <Skills />
      <MyWebsites />
      {/* <MyLaboratory /> */}
      <Footer />
    </Container>
  );
}
