import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  name: any;
  price: any;
  img: any;

  constructor(private _route: ActivatedRoute) { 
    this.name = this._route.snapshot.paramMap.get('name');
    this.price = this._route.snapshot.paramMap.get('price');
    this.img = this._route.snapshot.paramMap.get('img');
    
  }

  ngOnInit(): void {
  }

}
