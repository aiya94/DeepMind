import React from "react";
import { Row, Col, Nav, Tab, Container } from "react-bootstrap";
import "./SharingStyle.css";
import ImpalaTasks from "./ImpalaTasks";
import AlphaZeroTasks from "./AlphaZeroTasks";
import R2D3Tasks from "./R2D3Tasks";

export default class AgentsGeneral extends React.Component {
  render() {
    return (
      <div className="addMargin">
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">IMPALA</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">AlphaZero</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">R2D3</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <ImpalaTasks />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <AlphaZeroTasks />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <R2D3Tasks />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}
