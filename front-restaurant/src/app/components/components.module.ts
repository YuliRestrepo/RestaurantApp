import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './message/message.component';
import { SettingsComponent } from './settings/settings.component';
import { MenuComponent } from '../subcomponents/menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { SubcomponentsModule } from '../subcomponents/subcomponents.module';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    MessageComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule,
    SubcomponentsModule
  ],
  exports: [
    HomeComponent,
    DashboardComponent,
    MessageComponent,
    SettingsComponent
  ]
})
export class ComponentsModule { }
