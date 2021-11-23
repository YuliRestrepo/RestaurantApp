import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as _ from 'lodash';    

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getJSON().subscribe(data => {
      let categoriesA = data.map((val: { type: any; }) => val.type);
      this.categories = [...new Set(categoriesA)];

      // var newData = _.mapValues(_.groupBy(data, 'type'),
      //                     clist => clist.map(dat => _.omit(dat, 'type')));
      // this.menu = newData;
    });
  }

}
