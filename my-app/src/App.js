import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import AgentsList from "./Components/AgentsList";
import BarChartComponent from "./Components/AgentChart";
import ImpalaChart from "./Components/ImpalaChart";
import AgentComparison from "./Components/AgentComparison";
import AgentsGeneral from "./Components/AgentsGeneral";

function App() {
  return (
    <div className="App">
      <AgentsList />
      <Container>
        <Row>
          <Col md={6}>
            <BarChartComponent />
          </Col>
          <Col md={6}>
            <ImpalaChart />
          </Col>
        </Row>
      </Container>
      <AgentComparison />
      <AgentsGeneral />
    </div>
  );
}

export default App;
