import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as _ from 'lodash';    

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.css']
})
export class MenuHomeComponent {

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
