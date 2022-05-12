import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobapplyService {
  list!:any
  applyjob(val: any) {
  this.list = localStorage.getItem("token")
  let mailId = this.list.userMailId
  let data = {
    jobid:val,
    mailId:mailId}
  const url = "http://localhost:9000/application/applyJobApplication";
  return this.hc.post<any>(url,data,{responseType:'json'})
}

  constructor(private hc:HttpClient) { }
}
