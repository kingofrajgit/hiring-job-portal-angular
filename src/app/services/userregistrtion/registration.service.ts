import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  setData(data: { userMailId: any; userPass: any; userName: any; dateOfBirth: any; collegeName: any; course: any; branch: any; gender: any; phoneNumber: any; }) {
      let url = "http://localhost:9000/company/registration"
     return this.httpClient.post<any>(url,data,{responseType:'json'})
  }

  constructor( private httpClient : HttpClient) { }
}
