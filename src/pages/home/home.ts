import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
@ViewChild('barCanvas') barCanvas;
 barChart: any;

  constructor(public modalCtrl: ModalController) {
    
  }

 ionViewDidLoad() {
    console.log('ionViewDidLoad ChartJsPage');
   this.barChart = this.getBarChart();
 }

 getChart(context, chartType, data, options?) {
   return new Chart(context, {
     type: chartType,
     data: data,
     options: options
   });
 }

 // This is our first chart
 getBarChart() {
   let data = {
     labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
     datasets: [{
       data: [11, 15, 22, 4, 6, 2, 3],
       backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(244, 164, 96, 0.8)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
       ],
       borderColor: [
         'rgba(255,99,132,1)',
         'rgba(244, 164, 96, 1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
       ],
       borderWidth: 1
     }]
   };

   let options = {
     scales: {
       yAxes: [{
         ticks: {
           beginAtZero: true
         }
       }]
     }
   }

   return this.getChart(this.barCanvas.nativeElement, "bar", data, options);
 }

}
