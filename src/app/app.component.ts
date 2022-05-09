import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { DisplayServiceService } from './services/listAllAvailableJobsService/display-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;
  path!: string;
  jobsDisplayUrl!: any;
  jobsList!: any
  login="home"
  //spinner!: Observable<string>
  spinner!:string
    constructor(private fb: FormBuilder, private ds: DisplayServiceService, private hcm: HttpClientModule) {

  }
  ngOnInit(): void {
    this.jobsList = localStorage.getItem("jobsList")
    if(this.jobsList == undefined){
      this.ds.getlist()
    }
  }
  

  pathFunction(item:string){
    this.login = item
  }
  click() {
    this.path = "display";
  }

  condent!: String;
  // spinner() {
  //   this.condent = "block";
  // }
}


