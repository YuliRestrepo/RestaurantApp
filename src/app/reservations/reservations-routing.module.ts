import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailReservationComponent } from './pages/detail-reservation/detail-reservation.component';
import { NewReservationComponent } from './pages/new-reservation/new-reservation.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { SelectFoodComponent } from './pages/select-food/select-food.component';
import { SelectTableComponent } from './pages/select-table/select-table.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationsComponent
  },
  {
    path: 'new-reservation',
    component: NewReservationComponent
  },
  {
    path: 'detail-reservation',
    component: DetailReservationComponent
  },
  {
    path: 'new-reservation/more-dish',
    component: SelectFoodComponent
  },
  {
    path: 'new-reservation/more-table',
    component: SelectTableComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
