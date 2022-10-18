import { Component,Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  firstname="roja";
 lastname="";
 surname="";
 num=4;
 aadhar=36999999;
 status=false;
 today:any;
 name="tHaNmay";
 cars=['Benz','Toyota','Maruti Suzuki'];
 television=['Samsung','L.G','Sansui'];
document:any;
  constructor(@Inject(DOCUMENT) level:Document,private dataservice:DataserviceService) {
    this.document=level;
    this.today=this.dataservice.getdate();
   
   }
   check(event:any){
    alert(this.document.getElementById('surname').value);
   }
   print(event:any){
    alert(this.lastname);
  }
  data(event:any){
    alert('change television');
  }
  ngOnInit(): void {
  }

}
