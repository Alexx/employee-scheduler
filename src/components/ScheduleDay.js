import React from "react";
import { Card, ListGroup, Col } from "react-bootstrap";

function ScheduleDay(props) {
  return (
    <Col>
      <Card>
        <Card.Header>{`${props.day} - ${props.date}`}</Card.Header>
        <ListGroup variant="flush">{props.employeeList}</ListGroup>
      </Card>
    </Col>
  );
}

export default ScheduleDay;
