import React from "react";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import Navibar from "./components/Navibar";
import AddEmployeeForm from "./components/AddEmployeeForm";
import SignInSignUp from "./components/SignInSignUp";
import Schedule from "./components/Schedule";
import EmployeeRoster from "./components/EmployeeRoster";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Container>
        <Switch>
          <Route exact path="/" component={EmployeeRoster} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/new_employee" component={AddEmployeeForm} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
