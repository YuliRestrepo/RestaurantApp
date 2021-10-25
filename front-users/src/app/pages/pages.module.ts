import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    FavoritesComponent,
    HomeComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ],
  exports:[
    FavoritesComponent
  ]
})
export class PagesModule { }
