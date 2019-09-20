import React from "react";
import Employee from "./Employee";
import { addEmployee } from "../actions";
import { connect } from "react-redux";
import { v4 } from "uuid";

function EmployeeRoster(props) {
  let employeeList = [];
  for (let id in props.employees) {
    console.log(props.employees[id]);

    employeeList.push(<Employee key={id} employee={props.employees[id]} />);
  }
  return <div>{employeeList}</div>;
}

const mapStateToProps = state => {
  return { employees: state.data.employees };
};

export default connect(
  mapStateToProps,
  { addEmployee }
)(EmployeeRoster);
