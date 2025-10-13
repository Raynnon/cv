import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { IMAGE_SIZES } from '../../constants';

/**
 * Logo Component - Displays a skill logo
 * @param {string} name - Skill name
 * @param {string} logo - Path to the logo image
 * @param {boolean} showName - If true, displays the name on hover
 */
const Logo = ({ name, logo, showName }) => {
  return (
    <Col className="overlay-container text-center position-relative">
      {/* Skill logo */}
      <Image
        src={logo}
        alt={name}
        className={showName ? "overlay-img" : ""}
        width={IMAGE_SIZES.LOGO_SIZE}
        height={IMAGE_SIZES.LOGO_SIZE}
        loading="lazy"
      />

      {/* Text displayed on hover (if enabled) */}
      {showName && (
        <div className="position-absolute text-dark overlay logo-overlay-text">
          <p className="text-center fw-bolder">{name}</p>
        </div>
      )}
    </Col>
  );
};

Logo.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  showName: PropTypes.bool,
};

Logo.defaultProps = {
  showName: false,
};

export default Logo;
