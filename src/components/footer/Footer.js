import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import arrowTop from "../../images/arrow-top.png";
import { profile } from "../../data/profile";
import { ALT_TEXT, SECTIONS } from "../../constants";

/**
 * Footer
 * Contains the back-to-top button and social network links
 */
const Footer = () => {
  return (
    <Container
      id={SECTIONS.FOOTER}
      className="text-center pt-3 pb-1 bg-dark"
      as="footer"
      fluid
    >
      {/* Back to top link */}
      <a href={`#${SECTIONS.HEADER}`}>
        <Image src={arrowTop} alt={ALT_TEXT.TOP_ARROW} />
      </a>

      {/* Social network links */}
      <div id="social-networks" className="mt-3 mb-3">
        <a href={profile.social.linkedin} className="me-3">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href={profile.social.github}>
          <i className="fab fa-github"></i>
        </a>
      </div>
    </Container>
  );
};

export default Footer;
