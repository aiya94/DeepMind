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
        {
          task.slice(1, 2).map(agents => {
            agentName.push(agents.name);

            {
              agents.tasks.slice(0, 6).map(tasksDetail => {
                agentAI.push(tasksDetail.name);

                taskscore.push(tasksDetail.score);
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
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(0,0,0,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(75,192,192,1)",
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
