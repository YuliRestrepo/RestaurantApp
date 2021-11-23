import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { DetailDialogComponent } from '../../components/detail-dialog/detail-dialog.component';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  now = new Date();
  displayedColumns: string[] = ['id', 'user', 'date', 'table', 'foods', 'options'];
  dataSource = [] as any;
  color: ThemePalette;

  constructor(private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataService.getJSONReservations().subscribe(data => {
      this.dataSource = data;
      for (let reservation in this.dataSource){
        if(this.dataSource[reservation].estado === "Aprobada"){
          this.color = 'primary';
        }else if(this.dataSource[reservation].estado === "Pendiente"){
          this.color = 'accent';
        }
      }
    })
  }

  openDialog(foods: any){
    const dialogRef = this.dialog.open(DetailDialogComponent, {
      data: {foodsDialog: foods}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
