import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { v4 } from "uuid";

const initialState = {
  scheduledEmployees: {
    [v4()]: {
      firstName: "Alex",
      lastName: "Siegberg",
      monAvaFrom: 800,
      monAvaTo: 2400,
      tueAvaFrom: 800,
      tueAvaTo: 2400,
      wedAvaFrom: 800,
      wedAvaTo: 2400,
      thuAvaFrom: 800,
      thuAvaTo: 2400,
      friAvaFrom: 800,
      friAvaTo: 2400,
      satAvaFrom: 800,
      satAvaTo: 2400,
      sunAvaFrom: 800,
      sunAvaTo: 2400
    }
  }
};

let employeeList = [];
for (let id in initialState) {
  employeeList.push(
    <ListGroup.Item></ListGroup.Item>
  )
}

function Schedule() {
  return (
    <div>
      <Card>
        <Card.Header>Monday</Card.Header>
        <ListGroup variant="flush">{employeeList}</ListGroup>
      </Card>
    </div>
  );
}

export default Schedule;
