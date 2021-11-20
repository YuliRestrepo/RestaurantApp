import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { MaterialModule } from '../material/material.module';
import { NewReservationComponent } from './pages/new-reservation/new-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectFoodComponent } from './pages/select-food/select-food.component';
import { SelectTableComponent } from './pages/select-table/select-table.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';
import { DetailReservationComponent } from './pages/detail-reservation/detail-reservation.component';
import { MiniCardTableComponent } from './components/mini-card-table/mini-card-table.component';


@NgModule({
  declarations: [
    ReservationsComponent,
    NewReservationComponent,
    SelectFoodComponent,
    SelectTableComponent,
    MiniCardComponent,
    DetailReservationComponent,
    MiniCardTableComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ReservationsModule { }
