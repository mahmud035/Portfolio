import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div id="contact" className="contact-page pt-5 ">
        <div className="vh-100 container py-5">
          <div>
            <div className="contact-page-form-container">
              <div>
                <h4 className="py-4 text-center fs-2">
                  Contact <span style={{ color: 'aqua' }}> Me</span>
                </h4>
                <p className="text-center w-75 mx-auto">
                  Feel free to Contact me by submitting the form below and I
                  will get back to you as soon as possible
                </p>
              </div>
              <Form className=" d-flex flex-column justify-content-center p-4 ">
                <Form.Group className="mb-3 " controlId="formBasicPassword">
                  <Form.Label className="fw-bold">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Label className="fw-bold">Email </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="fw-bold">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder=" Enter Your Message"
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-center  mt-3">
                  <Button
                    className="fw-semibold px-5"
                    variant="primary"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
