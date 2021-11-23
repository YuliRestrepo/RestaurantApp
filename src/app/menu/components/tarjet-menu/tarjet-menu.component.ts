import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as _ from 'lodash';   

@Component({
  selector: 'app-tarjet-menu',
  templateUrl: './tarjet-menu.component.html',
  styleUrls: ['./tarjet-menu.component.css']
})
export class TarjetMenuComponent implements OnInit {

  @Input() type: any;
  menu: any;
  menuForType = [] as any;

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.dataService.getJSON().subscribe(data => {
      var newData = _.mapValues(_.groupBy(data, 'type'),
                          clist => clist.map(dat => _.omit(dat, 'type')));
      this.menu = newData;

      this.getMenuForType();
    });
  }

  getMenuForType(){
    this.menuForType = this.menu[this.type];
  }

}
