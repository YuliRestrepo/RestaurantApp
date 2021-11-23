import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  name: string = ''
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordError: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  register() {

  }

}
