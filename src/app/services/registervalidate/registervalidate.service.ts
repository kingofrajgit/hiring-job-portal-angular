import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistervalidateService {
  /**
   * this method used to retrive the data from backend
   */
  getCourse() {
    
      const url = "http://localhost:9000/Register/Requirement/findCourse";
      fetch(url).then(res => res.json()).then(res => {
          let result = res;
          localStorage.setItem("Coursetoken",JSON.stringify(result))

         
      });

  
  }

  constructor() { }
  /**
   * this method used to retrive the data from backend
   */
  getCollegeNames(){
  const collegeNameUrl = "http://localhost:9000/Register/Requirement/findCollege";
  fetch(collegeNameUrl).then(res => res.json()).then(res => {
    let result = res;
    localStorage.setItem("Collegetoken",JSON.stringify(result))
  });
}
}
