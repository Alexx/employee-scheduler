import React from "react";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import Navibar from "./components/Navibar";
import AddEmployeeForm from "./components/AddEmployeeForm";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Container>
        <h1>Works</h1>
        <AddEmployeeForm />
      </Container>
    </div>
  );
}

export default App;
