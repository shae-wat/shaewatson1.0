import React, { Component } from 'react';
import ChartJS from 'chart.js';

import './Component.css';

class Chart extends Component {
  componentDidMount(){
    this.createChart();
  }

  componentDidUpdate(){
    this.createChart();
  }

  render() {
    return (
      <div className='chart-container'>
        <canvas
          ref={(r)=>{this.chartElement=r;}}
          width="300"
          height="200"
          style={{width: '100%', height: 'auto', maxHeight: '350px'}}
        />
      </div>
    );
  }

  createChart = () => {
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new ChartJS(this.chartElement, {
      type: 'line',
      data: {
          labels: ["Mon", "Tues", "Wed", "Thurs", "Fri"],
          datasets: [{
              label: 'Number of Users',
              data: [12, 19, 3, 5, 2],
              backgroundColor: 'rgba(59, 68, 75, 0.2)',
              borderColor: 'rgba(59,68,75,1)',
              borderWidth: 1,
          }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        },
        title: {
          display: true,
          text: 'Users',
          position: 'bottom',
          fontSize: 20,
        },
      }
    });
  }

}

export default Chart;
