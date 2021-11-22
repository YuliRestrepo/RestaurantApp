import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-select-food',
  templateUrl: './select-food.component.html',
  styleUrls: ['./select-food.component.css']
})
export class SelectFoodComponent implements OnInit {

  toppings: FormGroup;
  data: any;
  entradas = [] as any;

  constructor(fb: FormBuilder, private dataService: DataService) {
    this.toppings = fb.group({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
    });
  }

  ngOnInit(): void {
    this.dataService.getJSON().subscribe((data: any) => {
      for (let food in data){
        if(data[food].type == "entradas"){
          this.entradas.push(data[food]);
        }
      }
    })
  }

}
