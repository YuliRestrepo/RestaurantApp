import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { SnackBarComponent } from '../../components/snack-bar/snack-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;
  durationInSeconds = 5;

  constructor(private dataService: DataService, private _router: Router,
              private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
  }

  login() {
    this.dataService.getJSONUsers().subscribe(data => {
      for (let user in data){
        if(this.email == data[user].email 
          && this.password == data[user].password 
          && data[user].rol == 'user'){
          console.log("Usuario");
          this._router.navigate(['user/home'])
        } else if(this.email == data[user].email 
          && this.password == data[user].password 
          && data[user].rol == 'admin'){
          console.log("Admin");
          this._router.navigate(['admin/dash'])
        } else if(this.email != data[user].email 
          && this.password != data[user].password ){
          this._snackBar.openFromComponent(SnackBarComponent, {
            duration: this.durationInSeconds * 1000,
          });
        }
      }
    })
  }

}
