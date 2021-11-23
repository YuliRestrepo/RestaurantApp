import { Component, OnInit } from '@angular/core';
// import { ChartDataSet, ChartOptions, ChartType } from 'chart.js';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as chart from 'chart.js';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    title : {
        display: true,
        text: 'Medios de pagos usados a lo largo del mes '
    },
    scales : {
        yAxes : [{
            scaleLabel: {
                display: true,
                labelString : 'número de pagos'
            },
            // ticks: { // para las unidades en los ejes
            //     callback:(value, index, values) => value + res.details.title.yUnit   
            // }
        }],
        xAxes : [{
            scaleLabel: {
                display: true,
                labelString : 'Meses del año'
            }
        }]
    },
  };
    
  public barChartLabels: Label[] = ['Enero','Febrero','Marzo','Abril','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [];
    
  public barChartData: ChartDataSets[] = [
    { data: [38, 34, 38, 40, 51, 40, 46, 31, 32, 46, 42, 58], label: 'Tarjeta de credito' },
    { data: [37, 45, 38, 50, 37, 44, 41, 45, 41, 44, 39, 51], label: 'PSE' },
 
  ];

  tarjetData = [
    {
      name: "Clientes",
      num: 1500
    },
    {
      name: "Reservas",
      num: 1008
    },
    {
      name: "Visualizaciones",
      num: '+10'
    }
  ]



  public pieChartOptions: ChartOptions = {
    responsive: true,
    title : {
        display: true,
        text: 'Tipos de platos pedidos por hombres, según su categoría  '
    },

  };
  public pieChartOptions2: ChartOptions = {
    responsive: true,
    title : {
        display: true,
        text: 'Tipos de platos pedidos por hombres, según su categoría  '
    },

  };
  public pieChartLabels: Label[] = ['Desayunos','Ensaladas','entradas','menu-infantil','plantos-fuertes','postres'];
  public pieChartData: number[] = [84,10,63,23,246,41];
  public pieChartType: ChartType = 'polarArea';
  public pieChartLegend = true;


  public pieChartLabels2: Label[] = ['Desayunos','Ensaladas','entradas','menu-infantil','plantos-fuertes','postres'];
  public pieChartData2: number[] = [76,6,65,25,234,55];
  public pieChartType2: ChartType = 'pie';
  public pieChartLegend2 = true;




  public barChartLabels3: Label[] = ['desayunos', 'ensaladas', 'entradas', 'menu-infantil', 'platos-fuertes',
  'postres'];
  public barChartType3: ChartType = 'bar';
  public barChartLegend3 = true;
  public barChartOptions3: ChartOptions = {
    responsive: true,
    title : {
        display: true,
        text: 'Número de ventas por tipo de platillo '
    },
    scales : {
        yAxes : [{
            scaleLabel: {
                display: true,
                labelString : 'Número de ventas'
            },
            // ticks: { // para las unidades en los ejes
            //     callback:(value, index, values) => value + res.details.title.yUnit   
            // }
        }],
        xAxes : [{
            scaleLabel: {
                display: true,
                labelString : 'Tipo de platillo'
            }
        }]
    },
  };
    
  public barChartData3: ChartDataSets[] = [
    { data: [160, 16, 128, 48, 480, 96], label: 'Tipo de platillo' }
  ];





  public barChartOptions4: ChartOptions = {
    responsive: true,
    title : {
        display: true,
        text: 'Ventas a lo largo del año '
    },
    scales : {
        yAxes : [{
            scaleLabel: {
                display: true,
                labelString : 'número de ventas'
            },
            // ticks: { // para las unidades en los ejes
            //     callback:(value, index, values) => value + res.details.title.yUnit   
            // }
        }],
        xAxes : [{
            scaleLabel: {
                display: true,
                labelString : 'Meses del año'
            }
        }]
    },
  };
    
  public barChartLabels4: Label[] = ['Enero','Febrero','Marzo','Abril','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  public barChartTyp4e: ChartType = 'line';
  public barChartLegend4 = true;
  public barChartPlugins4 = [];
    
  public barChartData4: ChartDataSets[] = [
    { data: [70, 69, 73, 83, 79, 77, 82, 71, 69, 86, 73, 96], label: 'Ventas' },
  ];





//   [70, 69, 73, 83, 79, 77, 82, 71, 69, 86, 73, 96]
  
public pieChartOptions5: ChartOptions = {
    responsive: true,
    title : {
        display: true,
        text: 'Número de ventas por sexo '
    },

  };
public pieChartLabels5: Label[] = ['M','F'];
public pieChartData5: number[] = [461, 467];
public pieChartType5: ChartType = 'pie';
public pieChartLegend5 = true;
  now = new Date();

  constructor() {
  }

  ngOnInit() {

  }

}
