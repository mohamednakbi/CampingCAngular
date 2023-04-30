import { HttpClient } from '@angular/common/http';
import { Component, OnInit , AfterViewInit, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChartConfiguration } from 'chart.js';

import Chart from 'chart.js/auto';
import { Evaluation } from 'src/app/Models/activity';
import { ActivityService } from 'src/app/Servicee/activity.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements AfterViewInit {

  chartdata: Evaluation[] = [];

  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = []; 


  canvas: any;
  ctx: any;
  @ViewChild('pieCanvas') pieCanvas!: { nativeElement: any };
  pieChart: any;


  constructor( 
    private service: ActivityService,
    private router: Router,
    private http: HttpClient
  ) { }
  

  ngAfterViewInit(): void {
    this.pieChartBrowser();

    this.service.Getchartinfo().subscribe(result => {
      this.chartdata = result as Evaluation[]; // Spécifiez le type Evaluation[]
      if (this.chartdata != null) {
        for (let i = 0; i < this.chartdata.length; i++) {
          console.log(this.chartdata[i]);
          this.labeldata.push(this.chartdata[i].noteValue); 
        }
        this.RenderChart(this.labeldata, this.realdata, this.colordata, 'bar', 'barchart'); 
      }
    }); 
    console.log(this.chartdata)
  }

  RenderChart(labeldata: any, maindata: any, colordata: any, type: any, id: any) {
    const myChart = new Chart(id, {
      type: type,
      data: {
        labels: ['Good', 'Bad', 'AVERAGE'],
        datasets: [{
          label: '# of Votes',
          data: maindata,
          backgroundColor: colordata,
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  pieChartBrowser(): void {
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.http.get<Map<string, number>>('http://localhost:8090/api/v1/StatEvaluation').subscribe(
      (dataMap) => {
        const labels = Object.keys(dataMap);
        const data = Object.values(dataMap);

        this.pieChart = new Chart(this.ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                backgroundColor: [
                  '#af4c4c',
                  '#BEBEBE',
                  'ffffff'
                ],
                data: data,
              },
            ],
          },
        });
      },
      (error) => {
        console.log('Erreur lors de la récupération des données du serveur', error);
      }
    );
  }

}