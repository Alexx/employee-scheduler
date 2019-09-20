import React from "react";
import Employee from "./Employee";
import { addEmployee } from "../actions";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function EmployeeRoster(props) {
  let employeeList = [];
  for (let id in props.employees) {
    console.log(props.employees[id]);

    employeeList.push(<Employee key={id} employee={props.employees[id]} />);
  }
  return (
    <div>
      {employeeList}
      <Link to="/new_employee">
        <Button>Add Employee</Button>
      </Link>
    </div>
  );
}

const mapStateToProps = state => {
  return { employees: state.data.employees };
};

export default connect(
  mapStateToProps,
  { addEmployee }
)(EmployeeRoster);
