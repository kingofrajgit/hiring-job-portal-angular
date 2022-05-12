import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AddjobapplicationService { 
  //EventEmiter<any> 
  setData(val: any) {
   
  }
  
    
  

  constructor(private hc: HttpClient, private rt: Router) { }
  
  addJob(data: { jobId: any; branch: any; companyName: any; roll: any; vacancy: any; location: any; lastDate: any; skills: any; salary: any; }) {
    let url = "http://localhost:9000/application/insert"
    return this.hc.post<any>(url, data, { responseType: 'json' })
  }
}
