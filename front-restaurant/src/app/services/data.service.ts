import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import * as _ from 'lodash';   

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getJSONUsers(): Observable<any>{
    return this.http.get("./assets/users.json");
  }

}
