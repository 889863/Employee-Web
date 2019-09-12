import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    });
    service = TestBed.get(EmployeeService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should be created Employee Service', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });

  it('should be created Employee Service addEmployee : SUCCESS', fakeAsync(() => {
    let request = { "first_name": "lycus", "last_name": "amanda", "gender": "FEMALE", "email": "lycus.amanda@mycompany.com", "phone": "5757557757", "joining_date": "2019-09-08T05:00:00.000Z", "grade": "C2", "role": "senior analyst", "reporting_manager": "subin john", "job_type": "FULL TIME", "status": "ACTIVE" };
    let response = { "employee": { "_id": "5d74399eb9763a4fb6f35bf3", "emp_id": "800037", "first_name": "LYCUS", "last_name": "AMANDA", "email": "LYCUS.AMANDA@MYCOMPANY.COM", "phone": "5757557757", "grade": "C2", "role": "SENIOR ANALYST", "reporting_manager": "SUBIN JOHN", "joining_date": "2019-09-08T05:00:00.000Z", "job_type": "FULL TIME", "status": "ACTIVE", "__v": 0 } };
    service.addEmployee(request);
    const req = httpTestingController.expectOne(
      "http://localhost:3000/employee/"
    );
    expect(req.request.method).toEqual("POST");
    req.flush(response);
    tick();
    expect(service).toBeTruthy();
  }));

  it('should be created Employee Service addEmployee : FAILURE', fakeAsync(() => {
    let request = { "first_name": "lycus", "last_name": "amanda", "gender": "FEMALE", "email": "lycus.amanda@mycompany.com", "phone": "5757557757", "joining_date": "2019-09-08T05:00:00.000Z", "grade": "C2", "role": "senior analyst", "reporting_manager": "subin john", "job_type": "FULL TIME", "status": "ACTIVE" };
    let errorData  = {"headers":{"normalizedNames":{},"lazyUpdate":null,"headers":{}},"status":0,"statusText":"Unknown Error","url":"http://ec2-52-15-122-154.us-east-2.compute.amazonaws.com:3000/employee/","ok":false,"name":"HttpErrorResponse","message":"Http failure response for http://ec2-52-15-122-154.us-east-2.compute.amazonaws.com:3000/employee/: 0 Unknown Error","error":{"isTrusted":true}};
    service.addEmployee(request);
    const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
    const data = 'Invalid request parameters';

    const req = httpTestingController.expectOne(
      "http://localhost:3000/employee/"
    );

    expect(req.request.method).toEqual("POST");
    req.flush(data, mockErrorResponse);
    tick();
    expect(service).toBeTruthy();

  }));

  it('should test Employee Service editEmployee : SUCCESS', fakeAsync(() => {
    let request = { "first_name": "lycus", "last_name": "amanda", "gender": "FEMALE", "email": "lycus.amanda@mycompany.com", "phone": "5757557757", "joining_date": "2019-09-08T05:00:00.000Z", "grade": "C2", "role": "senior analyst", "reporting_manager": "subin john", "job_type": "FULL TIME", "status": "ACTIVE" };
    let response = { "employee": { "_id": "5d74399eb9763a4fb6f35bf3", "emp_id": "800037", "first_name": "LYCUS", "last_name": "AMANDA", "email": "LYCUS.AMANDA@MYCOMPANY.COM", "phone": "5757557757", "grade": "C2", "role": "SENIOR ANALYST", "reporting_manager": "SUBIN JOHN", "joining_date": "2019-09-08T05:00:00.000Z", "job_type": "FULL TIME", "status": "ACTIVE", "__v": 0 } };
    service.editEmployee('80001', request);
    const req = httpTestingController.expectOne(
      "http://localhost:3000/employee/80001"
    );
    expect(req.request.method).toEqual("PATCH");
    req.flush(response);
    tick();
    expect(service).toBeTruthy();
  }));

  it('should test Employee Service editEmployee : FAILURE', fakeAsync(() => {
    let request = { "first_name": "lycus", "last_name": "amanda", "gender": "FEMALE", "email": "lycus.amanda@mycompany.com", "phone": "5757557757", "joining_date": "2019-09-08T05:00:00.000Z", "grade": "C2", "role": "senior analyst", "reporting_manager": "subin john", "job_type": "FULL TIME", "status": "ACTIVE" };
    let errorData  = {"headers":{"normalizedNames":{},"lazyUpdate":null,"headers":{}},"status":0,"statusText":"Unknown Error","url":"http://ec2-52-15-122-154.us-east-2.compute.amazonaws.com:3000/employee/","ok":false,"name":"HttpErrorResponse","message":"Http failure response for http://ec2-52-15-122-154.us-east-2.compute.amazonaws.com:3000/employee/: 0 Unknown Error","error":{"isTrusted":true}};
    service.editEmployee('80002', request);
    const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
    const data = 'Invalid request parameters';

    const req = httpTestingController.expectOne(
      "http://localhost:3000/employee/80002"
    );

    expect(req.request.method).toEqual("PATCH");
    req.flush(data, mockErrorResponse);
    tick();
    expect(service).toBeTruthy();

  }));

  

});
