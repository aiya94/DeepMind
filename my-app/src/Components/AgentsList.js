import React from "react";
import axios from "axios";
import "./SharingStyle.css";
import { Container, Row, Col, Badge } from "react-bootstrap";

export default class AgentsList extends React.Component {
  state = {
    agents: [],
    isLoading: true,
    errors: null
  };

  componentDidMount() {
    axios
      .get(`https://my-json-server.typicode.com/aiya94/DeepMind/agents`)
      .then(res => {
        const agents = res.data;
        this.setState({ agents, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    return (
      <div className="addMargin">
        <h2>
          AI <Badge variant="secondary">Page</Badge>
        </h2>
        <Container>
          <Row>
            {this.state.agents.map(agents => {
              return (
                <Col md={4} className="card">
                  <h4 className="headeling">{agents.name}</h4>
                  <p>{agents.description}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
