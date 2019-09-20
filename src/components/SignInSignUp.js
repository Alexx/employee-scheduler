import React from "react";
import { Link } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";

function SignInSignUp() {
  return (
    <Card>
      <Card.Header>
        <h2>Sign In</h2>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted">
              <Link>Create an account</Link>
            </Form.Text>
          </Form.Group>
          <Button>Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SignInSignUp;
