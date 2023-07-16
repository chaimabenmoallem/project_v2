import { Component, OnInit } from '@angular/core';
import { Chart, Title } from 'node_modules/chart.js';
import { registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-doughnuts',
  templateUrl: './doughnuts.component.html',
  styleUrls: ['./doughnuts.component.css']
})
export class DoughnutsComponent implements OnInit {
  constructor(){}

  ngOnInit() {
   const labelsDoughnut=
   [
     'Pink',
     'Blue',
     'Yellow'
   ]
   var mydoughnutandchart= new Chart('mydoughnutandchart',{
     type:'doughnut',
     data:{
       labels: labelsDoughnut,
       datasets: [{
         label: 'My First Dataset',
         data: [300, 50, 100],
         backgroundColor: [
           'rgba(255, 99, 132, 0.5)',
       'rgba(255, 159, 64, 0.5)',
       'rgba(255, 205, 86, 0.5)'
         ],
         hoverOffset: 20,
         offset:10, //space between data
         borderRadius:10,
         borderAlign:'center',
         borderColor:[
           'rgba(255, 99, 132, 2)',
           'rgba(255, 159, 64, 2)',
           'rgba(255, 205, 86, 2)'
         ],
         circumference:360,
         borderJoinStyle:'miter',
         borderWidth:5,
         spacing:10,
         borderDash:[20,50],
         borderDashOffset:40,
         hoverBorderDash:[100,50],
         hoverBorderWidth:5
       }]
     }, options: {
           //cutout:'90%',
           rotation:270,
           aspectRatio: 2,
           animation:{
             animateScale:true,
             animateRotate:true,
           },
           plugins:{
             
             tooltip:{
               callbacks:{
                 label:(context) =>{
                   console.log(context)
                   console.log(context.parsed)
                   return `the color is ${context.label}, and the number is ${context.parsed}            `
                 }
               }
             },
             
             
           }
           
     }
 
 
   })
  }

}
