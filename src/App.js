import React from "react";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import Navibar from "./components/Navibar";
import AddEmployeeForm from "./components/AddEmployeeForm";
import SignInSignUp from "./components/SignInSignUp";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className="App">
      <Navibar />

      <Schedule />
    </div>
  );
}

export default App;
