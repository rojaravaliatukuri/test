import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private getuserurl ="http://jsonplaceholder.typicode.com/users"

  constructor(private httpclient : HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.httpclient.get<User[]>(this.getuserurl);
  }

  getdate(){
    let date= new Date();
    return date;
  }
}
