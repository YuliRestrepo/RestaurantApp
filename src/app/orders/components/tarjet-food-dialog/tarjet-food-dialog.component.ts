import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjet-food-dialog',
  templateUrl: './tarjet-food-dialog.component.html',
  styleUrls: ['./tarjet-food-dialog.component.css']
})
export class TarjetFoodDialogComponent implements OnInit {

  @Input() name: any;
  @Input() price: any;
  @Input() type: any;
  @Input() img: any;

  constructor() { }

  ngOnInit(): void {
  }

}
