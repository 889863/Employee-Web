import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment'

/*Data Modeling for the Add Employee Response Data*/
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

  /*This method is used to call the REST end point to add new Employee */
  addEmployee(request:employeeDTO) {
    let promise = new Promise((resolve, reject) => {
      this.http.post(this.serviceEndPoint, request)
        .toPromise()
        .then(
          res => {
            /* Resolving the Success Response */
          resolve(res);
          }
        )
        .catch(err => {
          /* Rejecting the Error Response */
          reject(err);
      });
    });
    return promise;
  }

  /*This method is used to call the REST end point to Edit Employee */
  editEmployee(employeeId, request) {
    let promise = new Promise((resolve, reject) => {
      this.http.patch(this.serviceEndPoint+employeeId, request)
        .toPromise()
        .then(
          res => {
            /* Resolving the Success Response */
          resolve(res);
          }
        )
        .catch(err => {
          /* Rejecting the Error Response */
          reject(err);
      });
    });
    return promise;
  }


  /*This method is used to call the REST end point to find Employee */
  searchEmployee(param) {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.serviceEndPoint+'search', {params: param})
        .toPromise()
        .then(
          res => {
            /* Resolving the Success Response */
          resolve(res);
          }
        )
        .catch(err => {
          /* Rejecting the Error Response */
          reject(err);
      });
    });
    return promise;
  }
  
}


