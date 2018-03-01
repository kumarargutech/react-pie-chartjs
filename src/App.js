import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './App.css';


class App extends Component {
    constructor(props) {
      super();
      this.state = {
        width:200
      };
    }  

    render() {  

      const canStyle = {
        width: this.state.width 
      };

      const data = {
        labels: [
          'Google',
          'Yahoo',
          'NetFlex',
          'Cloud',
          'Chrome'
        ],
        datasets: [{
          data: [300, 50, 100,70, 68],
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          'orange',
          'gray'
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          'orange',
          'gray'
          ]
        }]        
      };
      
      const options = {
        responsive: true,
        maintainAspectRatio:true,
        transparencyEffects:true,
        layout: {
          padding: {
              left: 50,
              right: 0,
              top: 0,
              bottom: 0
          }
      },
        elements: {
          arc: {
              borderWidth: 0
          }
        },
        legend: {
          display: true,
          position: 'bottom',
          fullWidth: true,
          labels: {
            boxWidth: 8,
            fontSize: 20
          }          
        }
      }

    return (      
        <Doughnut data={data} options={options} width={800}/>      
    );
  }
}
export default App;
