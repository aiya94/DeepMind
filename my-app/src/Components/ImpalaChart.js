import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export default class ImpalaChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {}
    };
  }

  componentDidMount() {
    axios
      .get(`https://my-json-server.typicode.com/aiya94/DeepMind/agents`)
      .then(res => {
        const task = res.data;
        let taskscore = [];
        let agentsid = [];

        task.forEach(agents => {
          agentsid.push(agents.name);

          {
            var total = 0;
            agents.tasks.map(tasksDetail => {
              var avg = 0;
              total += tasksDetail.score;
              avg = total / task.length;
              taskscore.push(avg);
            });
          }
        });
        this.setState({
          Data: {
            labels: agentsid,
            datasets: [
              {
                label: " Average score",
                data: taskscore,
                fillColor: "#d4ffed",
                strokeColor: "#d4ffed",
                pointColor: "#d4ffed",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "#d4ffed",
                backgroundColor: ["#d4ffed"]
              }
            ]
          }
        });
      });
  }

  render() {
    return (
      <div>
        <Line data={this.state.Data} />
      </div>
    );
  }
}
