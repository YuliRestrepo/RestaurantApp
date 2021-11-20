import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations = [] as any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getJSONReservations().subscribe(data => {
      this.reservations = data;
    })
  }

}
