import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material/material.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ComponentsModule } from '../components/components.module';
import { ReservationsComponent } from './reservations/reservations.component';


@NgModule({
  declarations: [
    FavoritesComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class PagesModule { }
