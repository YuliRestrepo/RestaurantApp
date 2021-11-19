import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MenuHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MenuHomeComponent
  ]
})
export class ComponentsModule { }
