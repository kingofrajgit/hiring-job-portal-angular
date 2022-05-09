import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DisplayServiceService } from '../services/listAllAvailableJobsService/display-service.service';


@Component({
  selector: 'app-jobs-display',
  templateUrl: './jobs-display.component.html',
  styleUrls: ['./jobs-display.component.css']
})
export class JobsDisplayComponent implements OnInit {
  branch!: any
  constructor(private ds: DisplayServiceService ,private rt:Router){ }
  jobsList!: any
  loggedIn!: any
  ngOnInit(): void {
    this.jobsList = localStorage.getItem("jobsList")
    this.jobsList = JSON.parse(this.jobsList)
    if(this.jobsList == undefined){
      this.ds.getlist()
    }
    
  }
  apply(val :any){
    this.loggedIn = localStorage.getItem("loggedIn")
    if(this.loggedIn == null){
        this.rt.navigate(["/login"]);
    }
  }

}
