import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  val!: Observable<any>;

  constructor(private hc:HttpClient,private rt:Router
    ) { }
  val1!:string
  login(mailId: any, password: any ) {
    localStorage.setItem("spinner",JSON.stringify("spinner"))
    console.log(mailId,password)
    let url = "http://localhost:9000/user/login"
    let data ={userMailId:mailId,userPass:password}
   return this.hc.post<any>(url,data,{responseType:'json'})
  }}
