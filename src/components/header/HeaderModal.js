import * as React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const HeaderModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Contact me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>

          <Form.Group controlId="company">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>

          <Form.Group controlId="text-area">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} required />
          </Form.Group>
          <Button
            className="cta-button float-right mr-0"
            variant="secondary"
            type="submit"
          >
            Send
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default HeaderModal;
