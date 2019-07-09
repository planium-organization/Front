
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  chart: any;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Data1','Data2'],
        datasets: [
          {
            data: [55,45],
            backgroundColor: ['rgba(255, 0, 0, 1)','rgba(255, 0, 0, 0.1)'],
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        tooltips:{
          enabled:false
        }
      }
    });
  }

}
