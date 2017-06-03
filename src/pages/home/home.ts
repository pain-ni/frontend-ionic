import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ModalController, NavController, ViewController, NavParams, Platform } from 'ionic-angular';
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

  openModal() {
    let modal = this.modalCtrl.create(ModalContentPage);
    modal.present();
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

@Component({
  template: `
<ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>

<ion-content padding>
    <div>
        <!-- Pain fields: -->
        <ion-label>Pain questions:</ion-label>
        <!-- Pain areas: -->
        <ion-item>
        <ion-label>Pain areas:</ion-label>
            <ion-select [(ngModel)]="pain_areas" multiple="true" cancelText="Cancel" okText="Confirm">
                <ion-option value="neck">Neck</ion-option>
                <ion-option value="back">Back</ion-option>
                <ion-option value="leg">Leg</ion-option>
                <ion-option value="sensory">Sensory</ion-option>
            </ion-select>
        </ion-item>
        <!-- Pain types: -->
        <ion-item>
        <ion-label>Pain type:</ion-label>
            <ion-select [(ngModel)]="pain_type" multiple="true" cancelText="Cancel" okText="Confirm">
                <ion-option value="burning">Burning</ion-option>
                <ion-option value="pulsing">Pulsing</ion-option>
                <ion-option value="throbbing">Throbbing</ion-option>
                <ion-option value="numb">Numb</ion-option>
            </ion-select>
        </ion-item>
        <!-- average pain score: -->
        <ion-item>
            <ion-label>Average pain level:</ion-label>
            <ion-range min="0" max="10" step="1" pin="true" snaps="true"[(ngModel)]="pain_level">
                <ion-icon range-left small name="weak">0</ion-icon>
                <ion-icon range-right name="strong">10</ion-icon>
            </ion-range>
        </ion-item>
        <!-- Pain times: -->
        <ion-item>
        <ion-label>Times when experiencing pain:</ion-label>
            <ion-select [(ngModel)]="pain_day_time" multiple="true" cancelText="Cancel" okText="Confirm">
                <ion-option value="morning">Morning</ion-option>
                <ion-option value="afternoon">Afternoon</ion-option>
                <ion-option value="evening">Evening</ion-option>
                <ion-option value="night">Night</ion-option>
                <ion-option value="all_day">All Day</ion-option>
            </ion-select>
        </ion-item>

        <button ion-button full class="button" (click)="dismiss()">Submit</button>
    </div>
</ion-content>
`
})

export class ModalContentPage {
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
