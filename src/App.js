import React from "react";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import Navibar from "./components/Navibar";
import AddEmployeeForm from "./components/AddEmployeeForm";
import SignInSignUp from "./components/SignInSignUp";
import Schedule from "./components/Schedule";
import EmployeeRoster from "./components/EmployeeRoster";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Container>
        <EmployeeRoster />
      </Container>
    </div>
  );
}

export default App;
