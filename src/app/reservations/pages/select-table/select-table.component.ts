import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-table',
  templateUrl: './select-table.component.html',
  styleUrls: ['./select-table.component.css']
})
export class SelectTableComponent implements OnInit {

  tables = [
    {
      table: 4,
      num: 4
    },
    {
      table: 5,
      num: 6
    }
  ] as any;

  constructor() { }

  ngOnInit(): void {
  }

}
