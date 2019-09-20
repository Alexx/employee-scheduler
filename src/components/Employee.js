import React from "react";
import { Card } from "react-bootstrap";

function Employee(props) {
  console.log(props);
  return (
    <Card>
      <Card.Header>{props.employee.firstName}</Card.Header>
    </Card>
  );
}

export default Employee;
