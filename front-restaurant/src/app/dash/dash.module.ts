import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './pages/dash/dash.component';
import { MaterialModule } from '../material/material.module';
import { DataTarjetComponent } from './components/data-tarjet/data-tarjet.component';


@NgModule({
  declarations: [
    DashComponent,
    DataTarjetComponent
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    MaterialModule
  ]
})
export class DashModule { }
