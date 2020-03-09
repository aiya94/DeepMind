import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export default class AlphaZeroTasks extends Component {
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
        let agentName = [];
        let agentCategory = [];
        {
          task.slice(2, 3).map(agents => {
            agentName.push(agents.name);
            {
              agents.tasks.slice(0, 12).map(tasksDetail => {
                agentAI.push(tasksDetail.name);
                taskscore.push(tasksDetail.score);
                agentCategory.push(tasksDetail.category);
              });
            }
          });
        }

        this.setState({
          Data: {
            labels: agentAI,
            datasets: [
              {
                label: agentName,
                data: taskscore,
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#ffe0e6",
                borderColor: "#ff7290",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "#ffe0e6",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#ffe0e6",
                pointHoverBorderColor: "#ffe0e6",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10
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
