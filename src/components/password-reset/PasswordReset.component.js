import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const PasswordResetForm = ({
  handleOnChange,
  email,
  handleResetSubmit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center text-info">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                className="mt-2 ml-4 mb-2 w-75 mx-auto"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                required
              />
            </Form.Group>
            <Button type="submit" className="mx-auto-class">
              Reset Password
            </Button>
            <hr />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            href="#!"
            onClick={() => {
              formSwitcher("login");
            }}
          >
            Login Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};

PasswordResetForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default PasswordResetForm;
