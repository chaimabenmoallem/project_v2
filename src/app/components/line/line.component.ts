import { Component, OnInit } from '@angular/core';
import { Chart, Title } from 'node_modules/chart.js';
import { registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent  implements OnInit{
  constructor(){}
  ngOnInit(){
    const axes = [
      'ch', 'a', 'f', 'o', 'h', 'j', 'r']
    // const labels =Utils.months({ count: 7 });
    var mylinechart = new Chart('mylinechart', {
      type: 'line',
      data: {
        labels: axes,
        datasets: [{
          label: 'My First Dataset',
          backgroundColor: 'rgb(75, 192, 192)',
          data: [0, 10, 5, 2, 20, 30, 45],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.6,
          hoverBackgroundColor: 'red',
          pointHoverBorderColor: 'black'
        },
        {
          label: 'My Second Dataset',
          backgroundColor: 'pink',
          data: [40, 20, 33, 22, 25, 15, 7],
          fill: false,
          borderColor: 'pink',
          tension: 0.1,
          //borderDash:[20,10],
          pointHoverBorderWidth: 20
        }
        ]
  
      }, options: {
       // aspectRatio: 1,
       maintainAspectRatio:false,
        plugins: {
          legend: {
            align: 'start',
  
            position: 'bottom',
           
            labels: {
              color: 'black',
              font: {
                size: 14,
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
              }
            }
          }
  
        },
        scales: {
          y: {
            beginAtZero:true,
            suggestedMax:45,
            stacked: true //lines will be stacked on top of each other
          }
        }
  
      }
  
  
    })
  }

}
