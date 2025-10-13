import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BUTTON_LABELS } from "../../constants";

/**
 * ItemContent Component - Displays a portfolio project
 * Each project has an image, title, description, and links
 */
const ItemContent = ({
  name,
  image,
  imageAlt,
  description,
  liveLink,
  sourceLink,
  sourceLinkFront,
  sourceLinkBack
}) => {
  /**
   * Creates a source code button
   * Adapts the label based on link type (front/back/general)
   */
  const renderSourceButton = (url, type) => {
    let label = BUTTON_LABELS.SOURCE_CODE;

    if (type === 'front') {
      label = BUTTON_LABELS.FRONT_SOURCE_CODE;
    } else if (type === 'back') {
      label = BUTTON_LABELS.BACK_SOURCE_CODE;
    }

    return (
      <Button
        className="cta-second mb-2"
        variant="outline-primary"
        href={url}
        size="lg"
        target="_blank"
      >
        {label}
      </Button>
    );
  };

  return (
    <Row className="websites">
      {/* Project image */}
      <Col xs={12} xl={6}>
        <Image
          className="website-image"
          src={image}
          alt={imageAlt}
          fluid
        />
      </Col>

      {/* Project information and links */}
      <Col xs={12} xl={6} className="d-flex flex-column justify-content-center">
        <h3>{name}</h3>
        <p className="description website-description">{description}</p>

        {/* Action buttons */}
        <Row className="justify-content-center">
          {/* "See Live" button */}
          {liveLink && (
            <Button
              className="cta-button mb-2"
              variant="primary"
              href={liveLink}
              size="lg"
              target="_blank"
            >
              {BUTTON_LABELS.SEE_LIVE}
            </Button>
          )}

          {/* Source code buttons */}
          {sourceLink && renderSourceButton(sourceLink, 'general')}
          {sourceLinkFront && renderSourceButton(sourceLinkFront, 'front')}
          {sourceLinkBack && renderSourceButton(sourceLinkBack, 'back')}
        </Row>
      </Col>
    </Row>
  );
};

ItemContent.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
  sourceLink: PropTypes.string,
  sourceLinkFront: PropTypes.string,
  sourceLinkBack: PropTypes.string,
};

ItemContent.defaultProps = {
  liveLink: null,
  sourceLink: null,
  sourceLinkFront: null,
  sourceLinkBack: null,
};

export default ItemContent;
