import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class HeaderModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      email: "",
      message: "",
      recaptcha: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRecaptchaChange = this.handleRecaptchaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const obj = {};
    const key = event.target.id;
    obj[key] = event.target.value;

    this.setState(obj);
  }

  handleRecaptchaChange() {
    this.setState({ recaptcha: 1 });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.recaptcha) {
      const { name, company, email, message } = this.state;
      const templateParams = {
        name,
        company,
        email,
        message,
      };
      const serviceId = process.env.REACT_APP_SERVICEID;
      const templateId = process.env.REACT_APP_TEMPLATEID;
      const userId = process.env.REACT_APP_USERID;

      emailjs.send(serviceId, templateId, templateParams, userId).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    }
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Contact me
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                required
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="text-area">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                required
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="text-area">
              <ReCAPTCHA
                sitekey="6LcPHD8aAAAAAF3hH5M-ElCEVdFcjVe_gYnRcpxH"
                onChange={this.handleRecaptchaChange}
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
    );
  }
}
