import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
