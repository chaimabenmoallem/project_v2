import { Component, OnInit } from '@angular/core';
import { Chart, Title } from 'node_modules/chart.js';
import { registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit{
  constructor(){}

  ngOnInit(){
    var myChart = new Chart("mychart", {
      type: 'bar',
      data: {
        labels: ['chaima', 'olfa', 'Yosra'],
        datasets: [{
          label: '# of Votes',
          borderColor: [ 'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)'
          ],
          data: [12, 19, 3],
          borderWidth: 3,
          backgroundColor: ['rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)'],
          
        },
        { 
          label: '# of Votes',
          borderColor: ['rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)'
          ],
          data: [14, 9, 23],
          backgroundColor: ['rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)']
        },
        
        ]
      },
      options: {
        maintainAspectRatio:false,
        plugins:{
          legend:{
           
            reverse:true,
            labels:{
              color:'black'
            }
          }
        }
        ,
        scales: {
          x: {
            stacked:true,
            ticks: {
              color: 'black'
            }
          },
  
          y: {
            stacked:true,
            beginAtZero: true,
            suggestedMax: 25,
            ticks: {
              color: 'black'
            }
  
          }
        }
      }
    })
  
  }

}
