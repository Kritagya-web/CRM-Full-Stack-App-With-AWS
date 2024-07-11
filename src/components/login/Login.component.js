import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const LoginForm = ({
  handleOnChange,
  email,
  pass,
  handleSubmit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center text-info">Client Login</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                className="mt-2 ml-4 mb-2 w-75 mx-auto"
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="mt-2 ml-4 mb-2 w-75 mx-auto"
                type="password"
                name="password"
                value={pass}
                placeholder="Enter Password"
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Button type="submit" className="mx-auto-class">
              Login
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
              formSwitcher("reset");
            }}
          >
            Forget Password?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  pass: PropTypes.string,
  // pass: PropTypes.string.isRequired,
};

export default LoginForm;
