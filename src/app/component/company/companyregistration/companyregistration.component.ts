import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyregistrationService } from 'src/app/services/companyregistration/companyregistration.service';

@Component({
  selector: 'app-companyregistration',
  templateUrl: './companyregistration.component.html',
  styleUrls: ['./companyregistration.component.css']
})
export class CompanyregistrationComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private companyRegistration: CompanyregistrationService, 
    private rt: Router,private toster : ToastrService) { }
  companyMailIdError!: string
  passwordError !: string
  error!: any
  val!: any
  spinner!: string

  ngOnInit(): void {
  }

  userForm = this.fb.group({
    companyMailId: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern("(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")]),

  })

  clearUserFormError() {
    this.companyMailIdError = ""
    this.passwordError = ""
  }

  /**
   * this method used to send the data from component file to service
   */
  putUser() {
    this.spinner = "spinner"
    //clear user form errors
    this.clearUserFormError()
    //get the values from user forms(form group) 
    var mailId = this.userForm.get('companyMailId')?.value
    var password = this.userForm.get('password')?.value
    console.log(mailId, password)
    //validate
    let val = this.validation(mailId, password)
    let local = this
    if (val == 0) {
      //send the data in service
      let val = this.companyRegistration.login(mailId, password)
      val.subscribe(res => {
        local.val = res
        // let mail = JSON.parse(this.val) 
        console.log("raj", local.val)
          localStorage.setItem("rolltoken", JSON.stringify(local.val))
          this.rt.navigate(["/userprofile"])
      }, err => {
        this.toster.error(err.error);
        
      });
    }
  }

  /**
   * this method used for validation purpose
   * @param mailId 
   * @param password 
   * @returns 
   */
  validation(mailId: string, password: string) {
    let val = 0
    if (mailId == null || mailId.trim() == "") {
      this.companyMailIdError = "Enter an email"
      val = 1
    }
    if (!mailId.includes("@")) {
      this.companyMailIdError = "Enter an email"
    }
    else if (password == null || password.trim() == "") {
      this.passwordError = "enter a password"
      val = 1
    } else if (password.length <= 8 && password.length >= 16) {
      this.passwordError = "enter a valid password"
      val = 1
    } else {
      val = 0
    }
    return val
  }

}
