import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  tarjetData = [
    {
      name: "Clientes",
      num: 20
    },
    {
      name: "Reservas",
      num: 30
    },
    {
      name: "Clientes",
      num: 110
    }
  ]

  now = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
