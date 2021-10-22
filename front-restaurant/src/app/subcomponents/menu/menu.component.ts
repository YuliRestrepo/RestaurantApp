import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu = [
    {
      img: "https://s1.eestatic.com/2019/03/04/ciencia/nutricion/nutricion_380722770_117009518_854x640.jpg",
      nombre: 'Plato 1',
      precio: '10.000',
      disponibilidad: '10'
    },
    {
      img: "https://s1.eestatic.com/2019/03/04/ciencia/nutricion/nutricion_380722770_117009518_854x640.jpg",
      nombre: 'Plato 2',
      precio: '20.000',
      disponibilidad: '20'
    },
    {
      img: "https://s1.eestatic.com/2019/03/04/ciencia/nutricion/nutricion_380722770_117009518_854x640.jpg",
      nombre: 'Plato 3',
      precio: '30.000',
      disponibilidad: '30'
    },
    {
      img: "https://s1.eestatic.com/2019/03/04/ciencia/nutricion/nutricion_380722770_117009518_854x640.jpg",
      nombre: 'Plato 4',
      precio: '40.000',
      disponibilidad: '40'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
