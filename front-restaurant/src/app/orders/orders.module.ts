import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './pages/orders/orders.component';
import { MaterialModule } from '../material/material.module';
import { DetailDialogComponent } from './components/detail-dialog/detail-dialog.component';
import { TarjetFoodDialogComponent } from './components/tarjet-food-dialog/tarjet-food-dialog.component';


@NgModule({
  declarations: [
    OrdersComponent,
    DetailDialogComponent,
    TarjetFoodDialogComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule
  ]
})
export class OrdersModule { }
