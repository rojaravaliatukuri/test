import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { User } from '../user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
name:"";
  users:User[]=[];
  constructor(private dataservice:DataserviceService) { }

  displayusers(event:any){
    this.dataservice.getAllUsers().subscribe(user=>{
      this.users=user;
    })
    
  }
  ngOnInit(): void {
  }

}
