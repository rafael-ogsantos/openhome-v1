import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-show-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input('data') data: any;

  @ViewChild('myCanvas') canvas: ElementRef;
  lineChartColors;

  // lineChart
  lineChartData: any = [
      {data: [0, 6, 4, 5, 14, 8, 33, 9, 16, 7, 15, 2 ], label: 'Clicks'},
      {data: [0, 23, 2, 8, 22, 6, 8, 12, 4, 8, 28, 2 ], label: 'Clicks'}
    ];
  lineChartLabels: any = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ];
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };

  lineChartLegend = false;
  lineChartType = 'line';

  config;
  constructor() {
    this.config = this.data;
  }

  ngOnInit() {
    let elm, gradient, grade;
    if (this.canvas.nativeElement) {
      elm = this.canvas.nativeElement.getContext( '2d' );
      gradient = elm.createLinearGradient( 120, 80, 320, 0 );
      gradient.addColorStop( 0, 'rgba(76, 68, 164,.9)' );
      gradient.addColorStop( 1, 'rgba(206, 94, 126,.9)' );

      grade = elm.createRadialGradient( 238, 20, 10, 238, 20, 320 );
      grade.addColorStop( 0, 'rgba(225, 169, 156,.9)' );
      grade.addColorStop( 1, 'rgba(218, 96, 137,.5)' );

      this.lineChartColors = [
        { backgroundColor: gradient },
        { backgroundColor: grade }
      ];
    }
  }

  // events
  chartClicked( e: any ): void {
    console.log(e);
  }

}
