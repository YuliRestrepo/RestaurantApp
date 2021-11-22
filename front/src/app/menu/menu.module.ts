import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './pages/menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { TarjetMenuComponent } from './components/tarjet-menu/tarjet-menu.component';


@NgModule({
  declarations: [
    MenuComponent,
    TarjetMenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule
  ]
})
export class MenuModule { }
