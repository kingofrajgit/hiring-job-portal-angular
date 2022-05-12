import { Component, OnInit } from '@angular/core';
import { RegistervalidateService } from 'src/app/services/registervalidate/registervalidate.service';

@Component({
  selector: 'app-register-validation',
  templateUrl: './register-validation.component.html',
  styleUrls: ['./register-validation.component.css']
})
export class RegisterValidationComponent implements OnInit {

  constructor(private rs : RegistervalidateService) { }
  colleges!: any;
  course!:any
  ngOnInit(): void {
    this.getCollegeNames();
    this.getCourse();
  }

  /**
   * this method using for call service function
   */
  getCollegeNames() {
    this.rs. getCollegeNames();
  }
  getCourse(){
    this.rs.getCourse();
  }
}
