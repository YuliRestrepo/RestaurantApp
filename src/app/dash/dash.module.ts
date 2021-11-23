import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './pages/dash/dash.component';
import { MaterialModule } from '../material/material.module';
import { DataTarjetComponent } from './components/data-tarjet/data-tarjet.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashComponent,
    DataTarjetComponent
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    MaterialModule,
    ChartsModule
  ]
})
export class DashModule { }
