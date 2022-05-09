import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayServiceService {

  constructor(private hcm:HttpClientModule) { }
  url = "http://localhost:9000/application/getAllApplicationWhereFinalDate"
  jobsList!:any
  getlist(){
    
    fetch(this.url).then(res=>res.json()).then(res=>{
      this.jobsList = res
      localStorage.setItem("jobsList",JSON.stringify(this.jobsList))
    });
    return "success"
  }

  
}
