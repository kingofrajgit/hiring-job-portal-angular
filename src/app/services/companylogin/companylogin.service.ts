import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyloginService {
  val!: Observable<any>;

  constructor(private hc: HttpClient, private rt: Router) { }
  login(mailId: any, password: any) {
    localStorage.setItem("spinner", JSON.stringify("spinner"))
    console.log(mailId, password)
    let url = "http://localhost:9000/Company/login"
    let data = { mailId: mailId, password: password }
    return this.hc.post<any>(url, data, { responseType: 'json' })
  }
}
