import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  today:any;
  form:FormGroup;

  constructor(private dataservice:DataserviceService,private formBuilder:FormBuilder) {
    this.today=this.dataservice.getdate();

    this.form=this.formBuilder.group({
      first:['',Validators.required],
      last:['',Validators.required],
      fathername:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onsubmit(data:any){
    if(data.email==""){
      alert('Please Enter Email');
    }else{
      alert(data.email);
    }
    if(data.password==""){
      alert('Please Enter Password');
    }else{
      alert(data.password);
    }
  }

  submit(){
    if(this.form.valid){
      console.log(this.form);
      alert(this.form.value.first);
      alert(this.form.value.last);
      alert(this.form.value.fathername);
    }
  }

}
