import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { v4 } from "uuid";
import Moment from "moment";

const initialState = {
  employees: {
    monEmployees: {
      [v4()]: {
        firstName: "Alex",
        lastName: "Siegberg",
        startTime: "08:00:00",
        endTime: "16:00:00"
      },
      [v4()]: {
        firstName: "Bob",
        lastName: "Burger",
        startTime: "09:00:00",
        endTime: "17:00:00"
      }
    },
    tueEmployees: {
      [v4()]: {
        firstName: "Alex",
        lastName: "Siegberg",
        startTime: "08:00:00",
        endTime: "16:00:00"
      },
      [v4()]: {
        firstName: "Bob",
        lastName: "Burger",
        startTime: "09:00:00",
        endTime: "17:00:00"
      }
    }
  }
};

const convert = time => {
  return Moment(time, "HH:mm:ss").format("h:mmA");
};

let monEmployeeList = [];
let tueEmployeeList = [];
for (let id in initialState.employees.monEmployees) {
  monEmployeeList.push(
    <ListGroup.Item>
      {`
      ${convert(initialState.employees.monEmployees[id].startTime)} -
      ${convert(initialState.employees.monEmployees[id].endTime)}
      ${initialState.employees.monEmployees[id].firstName}
      ${initialState.employees.monEmployees[id].lastName}
      `}
    </ListGroup.Item>
  );
}

for (let id in initialState.employees.tueEmployees) {
  tueEmployeeList.push(
    <ListGroup.Item>
      {`
      ${convert(initialState.employees.tueEmployees[id].startTime)} -
      ${convert(initialState.employees.tueEmployees[id].endTime)}
      ${initialState.employees.tueEmployees[id].firstName}
      ${initialState.employees.tueEmployees[id].lastName}
      `}
    </ListGroup.Item>
  );
}

function Schedule() {
  return (
    <div>
      <Card style={{ width: "14%" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>Openers</ListGroup.Item>
          {monEmployeeList}
        </ListGroup>
      </Card>
      <Card style={{ width: "14%" }}>
        <ListGroup.Item>Openers</ListGroup.Item>
        <ListGroup variant="flush">{tueEmployeeList}</ListGroup>
      </Card>
    </div>
  );
}

export default Schedule;
