import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment'

interface employeeDTO {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  grade: string;
  role: string;
  reporting_manager: string;
  joining_date: string;
  job_type: string;
  status: string;

}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  serviceEndPoint: string = environment.serviceUrl;
  constructor(private http: HttpClient) { }

  addEmployee(request:employeeDTO) {
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.serviceEndPoint, request)
        .toPromise()
        .then(
          res => { // Success
         console.log("addEmployee Response", res);
          resolve(res);
          },
          msg => { // Error
            console.log("addEmployee Reject Response", msg);
          reject(msg);
          }
        );
    });
    return promise;
  }
  
}


