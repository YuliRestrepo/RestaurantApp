import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.css']
})
export class DetailReservationComponent implements OnInit {

  id: any;
  date: any;
  table: any;
  foods: any;

  constructor(private _route: ActivatedRoute) { 
    this.id = this._route.snapshot.paramMap.get('id');
    this.date = this._route.snapshot.paramMap.get('date');
    this.table = this._route.snapshot.paramMap.get('table');
    this.foods = this._route.snapshot.paramMap.get('foods');
  }

  ngOnInit(): void {
  }

}
