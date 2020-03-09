import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

export default class BarChartComponent extends Component {
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
        let agentAI = [];
        let taskscore = [];

        task.forEach(agents => {
          agentAI.push(agents.name);

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
            labels: agentAI,
            datasets: [
              {
                label: " Average score",
                data: taskscore,
                backgroundColor: [
                  "rgba(255,105,145,0.6)",
                  "rgba(155,100,210,0.6)",
                  "rgba(90,178,255,0.6)",
                  "rgba(240,134,67,0.6)",
                  "rgba(120,120,120,0.6)",
                  "rgba(250,55,197,0.6)"
                ]
              }
            ]
          }
        });
      });
  }

  render() {
    return (
      <div>
        <Bar data={this.state.Data} />
      </div>
    );
  }
}
