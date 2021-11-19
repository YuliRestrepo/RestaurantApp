import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.css']
})
export class MenuHomeComponent {

  menu = [
    {
      img: "https://s1.eestatic.com/2019/03/04/ciencia/nutricion/nutricion_380722770_117009518_854x640.jpg",
      name: 'Plato 1',
      rate: '10.000',
      disponibility: '10'
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
    },
    {
      img: "https://s1.eestatic.com/2019/03/04/ciencia/nutricion/nutricion_380722770_117009518_854x640.jpg",
      nombre: 'Plato 5',
      precio: '50.000',
      disponibilidad: '50'
    }
  ]

  constructor() {}

}
