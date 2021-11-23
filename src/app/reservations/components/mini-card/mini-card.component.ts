import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent implements OnInit {

  @Input() id: any;
  reservations = [] as any;
  reserva = [] as any;

  constructor(private dataService: DataService) { 
  }

  ngOnInit(): void {
    this.dataService.getJSONReservations().subscribe(data => {
      this.reservations = data;
      console.log(this.reservations);
      for (let reserva in this.reservations){
        if (this.reservations[reserva].id == this.id){
          this.reserva=this.reservations[reserva].foods;
        }
      }
    })
  }

}
