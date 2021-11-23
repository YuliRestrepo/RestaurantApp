import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-tarjet',
  templateUrl: './data-tarjet.component.html',
  styleUrls: ['./data-tarjet.component.css']
})
export class DataTarjetComponent implements OnInit {

  @Input() name: any;
  @Input() num: any;

  constructor() { }

  ngOnInit(): void {
  }

}
