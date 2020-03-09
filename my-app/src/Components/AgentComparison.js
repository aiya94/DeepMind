import React from "react";
import "./SharingStyle.css";
import { Badge } from "react-bootstrap";

export default class AgentComparison extends React.Component {
  render() {
    return (
      <div className="addMargin">
        <h2>
          AI <Badge variant="secondary">Comparison</Badge>
        </h2>
      </div>
    );
  }
}
