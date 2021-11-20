import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  name: any;
  price: any;
  img: any;
  type: any;
  listnameFavoritos: any;
  isFavorito: any = false;

  constructor(private _route: ActivatedRoute, private dataService: DataService) { 
    this.name = this._route.snapshot.paramMap.get('name');
    this.price = this._route.snapshot.paramMap.get('price');
    this.img = this._route.snapshot.paramMap.get('img');
    this.type = this._route.snapshot.paramMap.get('type');
  }

  ngOnInit(): void {
    this.dataService.getJSONFavorites().subscribe( data => {
      let nameFavoritos = data.map((val: { name: any; }) => val.name);
      this.listnameFavoritos = [...new Set(nameFavoritos)];

      if(this.name in this.listnameFavoritos){
        this.isFavorito = true;
      }

      console.log(data);
    });
  }

  addOrDelete(){
    this.dataService.getJSONFavorites().subscribe( data => {
      if(this.isFavorito = false){
        // Eliminar del JSON de favoritos
        console.log("Voy a eliminar");

      }else{
        // Añadir al JSON de favoritos
        console.log("Voy a agregar");
        
        data.push(
          {
            "name": this.name,
            "type": this.type,
            "price": this.price,
            "img": this.img
          }
        )
        console.log("New data favorites: ", data);
      }
    })
  }

}
