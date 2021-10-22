import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  today: number = Date.now();
  categories = ['Platos frios', 'Platos calientes', 'Postres'];
  
  constructor() { }


  ngOnInit(): void {
  }

}
