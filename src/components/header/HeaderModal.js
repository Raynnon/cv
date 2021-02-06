import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function HeaderModal(props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState("");
  const [recaptcha, setRecaptcha] = useState(0);

  const handleChange = (event) => {
    if (event.target.id === "text-area") {
      setMessage({ message: event.target.value });
    } else {
      const obj = {};
      const key = event.target.id;
      obj[key] = event.target.value;

      switch (event.target.id) {
        case "name":
          setName(obj[key]);
          break;
        case "company":
          setCompany(obj[key]);
          break;
        case "email":
          setEmail(obj[key]);
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = () => {
    if (recaptcha) {
      setEmailSent({ emailSent: true });
      const templateParams = {
        name,
        company,
        email,
        message,
      };

      console.log(templateParams);

      const serviceId = process.env.REACT_APP_SERVICEID;
      const templateId = process.env.REACT_APP_TEMPLATEID;
      const userId = process.env.REACT_APP_USERID;

      emailjs.send(serviceId, templateId, templateParams, userId).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          setEmailSent({ emailSent: false });
          console.log("FAILED...", error);
        }
      );
    }
  };

  return !emailSent ? (
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
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="company">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" required onChange={handleChange} />
          </Form.Group>

          <Form.Group controlId="text-area">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="text-area">
            <ReCAPTCHA
              sitekey="6LcPHD8aAAAAAF3hH5M-ElCEVdFcjVe_gYnRcpxH"
              onChange={() => setRecaptcha({ recaptcha: 1 })}
            />
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
  ) : (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-bottom-0" closeButton>
        <p className="text-success mx-auto my-auto">Email Sent</p>
      </Modal.Header>
    </Modal>
  );
}
