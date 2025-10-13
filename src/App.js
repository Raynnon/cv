import React from "react";
import Container from "react-bootstrap/Container";

// Import page components
import Header from "./components/header";
import Skills from "./components/skills";
import MyWebsites from "./components/my-websites";
import Footer from "./components/footer";

// Global styles
import "./custom.scss";
import "./app.scss";

/**
 * Main CV Application Component
 * Organizes all page sections
 */
export default function App() {
  return (
    <Container fluid>
      {/* Header with intro */}
      <Header />

      {/* Skills section */}
      <Skills />

      {/* Projects section */}
      <MyWebsites />

      {/* Footer */}
      <Footer />
    </Container>
  );
}
