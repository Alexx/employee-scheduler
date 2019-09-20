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
let wedEmployeeList = [];
let thuEmployeeList = [];
let friEmployeeList = [];
let satEmployeeList = [];
let sunEmployeeList = [];

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
        <ScheduleDay day="Monday" date="9/16" employeeList={monEmployeeList} />
        <ScheduleDay day="Tuesday" date="9/17" employeeList={tueEmployeeList} />
        <ScheduleDay
          day="Wednesday"
          date="9/18"
          employeeList={tueEmployeeList}
        />
        <ScheduleDay
          day="Thursday"
          date="9/19"
          employeeList={tueEmployeeList}
        />
        <ScheduleDay day="Friday" date="9/20" employeeList={tueEmployeeList} />
        <ScheduleDay
          day="Saturday"
          date="9/21"
          employeeList={tueEmployeeList}
        />
        <ScheduleDay day="Sunday" date="9/22" employeeList={tueEmployeeList} />
      </Row>
    </div>
  );
}

export default Schedule;
