import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations = [
    {
      id: '1',
      date: '12/10/2021',
      foods: [
        {
          name: 'nombre comida',
          rate: '20000',
          amount: '3'
        },
        {
          name: 'nombre comida 2',
          rate: '40000',
          amount: '1'
        }
      ],
      table: '4'
    },
    {
      id: '2',
      date: '30/10/2021',
      foods: [
        {
          name: 'nombre comida',
          rate: '20000',
          amount: '3'
        },
        {
          name: 'nombre comida 2',
          rate: '40000',
          amount: '1'
        }
      ],
      table: '2'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
