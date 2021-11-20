import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getJSONFavorites().subscribe(data => {
      this.favorites = data;
      console.log(this.favorites);
    })
  }

}
