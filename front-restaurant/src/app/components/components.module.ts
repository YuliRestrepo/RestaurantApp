import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    MessageComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    HomeComponent,
    DashboardComponent,
    MessageComponent,
    SettingsComponent
  ]
})
export class ComponentsModule { }
