import React from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import { v4 } from "uuid";
import Moment from "moment";
import ScheduleDay from "./ScheduleDay";

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
      <Row>
        <ScheduleDay day="Monday" employeeList={monEmployeeList} />
        <ScheduleDay day="Tuesday" employeeList={tueEmployeeList} />
        <ScheduleDay day="Wednesday" employeeList={tueEmployeeList} />
        <ScheduleDay day="Thursday" employeeList={tueEmployeeList} />
        <ScheduleDay day="Friday" employeeList={tueEmployeeList} />
        <ScheduleDay day="Saturday" employeeList={tueEmployeeList} />
        <ScheduleDay day="Sunday" employeeList={tueEmployeeList} />
      </Row>
    </div>
  );
}

export default Schedule;
