import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card-table',
  templateUrl: './mini-card-table.component.html',
  styleUrls: ['./mini-card-table.component.css']
})
export class MiniCardTableComponent implements OnInit {

  @Input() table: any;
  @Input() num: any;

  constructor() { }

  ngOnInit(): void {
  }

}
