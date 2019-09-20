import React from "react";
import { Card, Form, Button } from "react-bootstrap";

function SignInSignUp() {
  return (
    <Card>
      <Card.Header>
        <h2>Add New Employee</h2>
      </Card.Header>
      <Card.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="employeeFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="employeeLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
              </Form.Group>
            </Col>
          </Row>
          <Button>Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SignInSignUp;
