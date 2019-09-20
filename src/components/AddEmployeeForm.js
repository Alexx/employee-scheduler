import React from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

let cardStyle = {
  padding: "1rem"
};

function AddEmployeeForm() {
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
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Label>Availability</Form.Label>
          {["checkbox"].map(type => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Monday"
                type={type}
                id={"mondayAvailability"}
              />
              <Form.Check
                inline
                label="Tuesday"
                type={type}
                id={"tuesdayAvailability"}
              />
              <Form.Check
                inline
                label="Wednesday"
                type={type}
                id={"wednesdayAvailability"}
              />
              <Form.Check
                inline
                label="Thursday"
                type={type}
                id={"thursdayAvailability"}
              />
              <Form.Check
                inline
                label="Friday"
                type={type}
                id={"fridayAvailability"}
              />
              <Form.Check
                inline
                label="Saturday"
                type={type}
                id={"saturdayAvailability"}
              />
              <Form.Check
                inline
                label="Sunday"
                type={type}
                id={"sundayAvailability"}
              />
            </div>
          ))}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default AddEmployeeForm;
