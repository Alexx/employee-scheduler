import React from "react";
import { Row, Col, Form } from "react-bootstrap";

function HoursAvailability(props) {
  return (
    <div>
      <Form.Label>{props.day} Availability</Form.Label>
      <Row>
        <Col>
          <Form.Group controlId={`${props.day}From`}>
            <Form.Label>From</Form.Label>
            <Form.Control as="select">
              <option>Open Availability</option>
              <option>Midnight</option>
              <option>1:00am</option>
              <option>2:00am</option>
              <option>3:00am</option>
              <option>4:00am</option>
              <option>5:00am</option>
              <option>6:00am</option>
              <option>7:00am</option>
              <option>8:00am</option>
              <option>9:00am</option>
              <option>10:00am</option>
              <option>11:00am</option>
              <option>Noon</option>
              <option>1:00pm</option>
              <option>2:00pm</option>
              <option>3:00pm</option>
              <option>4:00pm</option>
              <option>5:00pm</option>
              <option>6:00pm</option>
              <option>7:00pm</option>
              <option>8:00pm</option>
              <option>9:00pm</option>
              <option>10:00pm</option>
              <option>11:00pm</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId={`${props.day}To`}>
            <Form.Label>To</Form.Label>
            <Form.Control as="select">
              <option>Open Availability</option>
              <option>Midnight</option>
              <option>1:00am</option>
              <option>2:00am</option>
              <option>3:00am</option>
              <option>4:00am</option>
              <option>5:00am</option>
              <option>6:00am</option>
              <option>7:00am</option>
              <option>8:00am</option>
              <option>9:00am</option>
              <option>10:00am</option>
              <option>11:00am</option>
              <option>Noon</option>
              <option>1:00pm</option>
              <option>2:00pm</option>
              <option>3:00pm</option>
              <option>4:00pm</option>
              <option>5:00pm</option>
              <option>6:00pm</option>
              <option>7:00pm</option>
              <option>8:00pm</option>
              <option>9:00pm</option>
              <option>10:00pm</option>
              <option>11:00pm</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <hr />
    </div>
  );
}

export default HoursAvailability;
