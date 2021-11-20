import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites = [
    {
      img: "https://s1.eestatic.com/2019/03/04/ciencia/nutricion/nutricion_380722770_117009518_854x640.jpg",
      name: 'Plato 1',
      rate: '10.000'
    },
    {
      img: "https://s1.eestatic.com/2019/03/04/ciencia/nutricion/nutricion_380722770_117009518_854x640.jpg",
      name: 'Plato 2',
      rate: '20.000'
    },
    {
      img: "https://s1.eestatic.com/2019/03/04/ciencia/nutricion/nutricion_380722770_117009518_854x640.jpg",
      name: 'Plato 4',
      rate: '40.000'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
