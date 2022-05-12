import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/userloginservice/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private sc: LoginserviceService, private rt: Router) { }

  ngOnInit(): void {
  }
  userMailError!: string
  userPassError!: string
  emailValidate!: any
  error!: any
  val!: any
  spinner!: string

  /**
   * 
   */
  userForm = this.fb.group({
    userMail: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    userPass: new FormControl('', [
      Validators.required,
      Validators.pattern("(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")]),

  })

  /**
   * this method is used for clear the user form error
   */
  clearUserFormError() {
    this.userMailError = ""
    this.userPassError = ""
  }

  /**
   * this method used to send the data from service
   */
  putUser() {
    this.spinner = "spinner"
    //clear user form errors
    this.clearUserFormError()
    //get the values from user forms(form group) 
    var mailId = this.userForm.get('userMail')?.value
    var password = this.userForm.get('userPass')?.value
    console.log(mailId, password)
    //validate
    let val = this.validation(mailId, password)
    let local = this
    if (val == 0) {
      //send the data in service
      let val = this.sc.login(mailId, password)
      val.subscribe(res => {
        local.val = res
        // let mail = JSON.parse(this.val) 
        console.log("raj", local.val)
        local.spinner = "null"
        if (local.val.userMailId != null) {
          localStorage.setItem("token", JSON.stringify(local.val))
          local.spinner = "null"
          this.rt.navigate(["/userprofile"])
        } else {
          alert("invalid login Credentialdential");

        }
      }, err => {
        let error = err.error
        console.log("gopi", error.userMailId)
        if (error.userMailId != null) {
          this.rt.navigate(["/userprofile"])
        } else {
          local.val = error
          console.log(local.val)
        }
      });
    }
    else {
      console.log(val)
    }
    console.log(this.val)
  }

  get userEmail() {
    return this.userForm.get('userMail')
  }

  get password() {
    return this.userForm.get('userPass')
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
      this.userMailError = "Enter an email"
      val = 1
    }
    else if (this.userEmail?.status == "INVALID") {
      this.userMailError = "enter a valid email"
      val = 1
    }
    else if (password == null || password.trim() == "") {
      this.userPassError = "enter a password"
      val = 1
    }else if (password.length<9 && password.length>16){
      this.userPassError = "enter a valid password"
    } else {
      val = 0
    }
    return val
  }

}
