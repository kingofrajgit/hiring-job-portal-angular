import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistervalidateService } from 'src/app/services/registervalidate/registervalidate.service';
import { RegistrationService } from 'src/app/services/userregistrtion/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  colleges!: any;
  course!: any;
  data !: any;
  val!:any;
  tokens!:any
  constructor(private hc: HttpClient,
    private fb: FormBuilder,
    private rs: RegistervalidateService,
    private registrtionService : RegistrationService,
    private router : Router
    ) { }

  ngOnInit() {
    this.data = localStorage.getItem("Coursetoken")
    this.course = JSON.parse(this.data);
    this.data = localStorage.getItem("Collegetoken")
    this.colleges = JSON.parse(this.data);
  }

  token!:any

  userForm = this.fb.group({
     firstName:[""],
     lastName: [""],
    dateOfBirth: [""],
    collegeName: [""],
    course: [""],
    branch: [""],
    gender: [""],
    phoneNumber: [""]
  });
  submitApplication() {

    let first = this.userForm.get('firstName')?.value;
    let last = this.userForm.get('lastName')?.value;
    let fullName = first+last;
  
    let DOB = this.userForm.get('dateOfBirth')?.value;
    let collegeName = this.userForm.get('collegeName')?.value;
    let course = this.userForm.get('course')?.value;
    let branch = this.userForm.get('branch')?.value;
    let gender = this.userForm.get('gender')?.value;
    let phoneNumber = this.userForm.get('phoneNumber')?.value;
    this.tokens = localStorage.getItem("token")
    this.token = JSON.parse(this.tokens);
    
    let mailId = this.token.userMailId
    let password = this.token.userMailId
    console.log(this.token,mailId ,password)
    let data = {
      userMailId: mailId,
      userPass: password,
      userName: fullName,
      dateOfBirth: DOB,
      collegeName: collegeName,
      course: course,
      branch: branch,
      gender: gender,
      phoneNumber: phoneNumber
    }
    console.log(data);

    let val  = this.registrtionService.setData(data)
    let local = this
    val.subscribe(res=>{
      local.val = res
      // let mail = JSON.parse(this.val) 
      console.log("raj",local.val)
      // if( local.val.userMailId != null ){
      //   localStorage.setItem("token",JSON.stringify(local.val)
      //  // this.router.navigate(["/userprofile"])
      //  }else{
      alert("invalid login Credentialdential");
      // }
     }, err=>{
       let error=err.error
       console.log("gopi",error.userMailId)
      if( error.userMailId != null ){
       this.router.navigate(["/userprofile"])
      }else{
        local.val=error
        console.log(local.val)
      }
    })
  }

}
