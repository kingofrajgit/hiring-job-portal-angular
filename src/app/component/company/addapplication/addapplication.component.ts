import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddjobapplicationService } from 'src/app/services/addjobapplication/addjobapplication.service';

@Component({
  selector: 'app-addapplication',
  templateUrl: './addapplication.component.html',
  styleUrls: ['./addapplication.component.css']
})
export class AddapplicationComponent implements OnInit {
  val: any;
  spinner!: string ;
  email!:any
  token!:any
  constructor(private fb : FormBuilder ,
     private addJob:AddjobapplicationService,
     private rt:Router,
     private toaster:ToastrService) { }

  ngOnInit(): void {

  }
  application=this.fb.group({
    jobId:[''],
    branch:[''],
    companyName:[''],
    roll:[''],
    vacancy:[''],
    location:[''],
    lastDate:[''],
    skills:[''],
    salary:[''],

  });
  submitApplication(){
   
    let jobId  = this.application.get('jobId')?.value
    let branch = this.application.get('branch')?.value
    let companyName = this.application.get('companyName')?.value
    let roll = this.application.get('roll')?.value
    let vacancy = this.application.get('vacancy')?.value
    let location = this.application.get('location')?.value
    let lastDate = this.application.get('lastDate')?.value
    let skills = this.application.get('skills')?.value
    let salary = this.application.get('salary')?.value
    this.email = this.getToken()
    let data= { 
      jobId:jobId,
      branch:branch,
      companyName:companyName,
      roll:roll,
      vacancy:vacancy,
      location:location,
      lastDate:lastDate,
      skills:skills,
      salary:salary,
      mailId:this.email
  }
 console.log(data);
  
    let val  = this.addJob.addJob(data)
    let local = this
    val.subscribe(res=>{
      local.val = res
      local.spinner = "null"
      this.toaster.success("job is posted")
      this.addJob.setData(local.val )
     }, err=>{
       this.toaster.error(err)
    })
  }
  getToken() {
    this.token = localStorage.getItem("rolltoken");
      let tokenData = JSON.parse(this.token)
      this.email = tokenData.mailId;
      return this.email
  }
}


