import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  now = new Date();
  categories: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getJSON().subscribe(data => {
      let categoriesA = data.map((val: { type: any; }) => val.type);
      this.categories = [...new Set(categoriesA)];
    });
  }

}
