import { AddEmployeeComponent } from './add-employee.component';
import { EmployeeModelComponent } from '../employee-model/employee-model.component';
import { ErrorModelComponent } from '../error-model/error-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TestBed, inject, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { Component } from '@angular/core';

const promisedData = {"employee":{"_id":"5d74399eb9763a4fb6f35bf3","emp_id":"800037","first_name":"LYCUS","last_name":"AMANDA","email":"LYCUS.AMANDA@MYCOMPANY.COM","phone":"5757557757","grade":"C2","role":"SENIOR ANALYST","reporting_manager":"SUBIN JOHN","joining_date":"2019-09-08T05:00:00.000Z","job_type":"FULL TIME","status":"ACTIVE","__v":0}};
const errorData  = {"headers":{"normalizedNames":{},"lazyUpdate":null,"headers":{}},"status":0,"statusText":"Unknown Error","url":"http://ec2-52-15-122-154.us-east-2.compute.amazonaws.com:3000/employee/","ok":false,"name":"HttpErrorResponse","message":"Http failure response for http://ec2-52-15-122-154.us-east-2.compute.amazonaws.com:3000/employee/: 0 Unknown Error","error":{"isTrusted":true}};
describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;
  const mockMatDialog = {
    closeAll: (): void => undefined,
    open: (): void => undefined
  };

  const dialogMock = {
    close: () => { },
    open: ()=>{}
   };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddEmployeeComponent, EmployeeModelComponent, ErrorModelComponent, EmployeeService,  
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: MatDialogRef, useValue: dialogMock }],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule]
    });
  });

  beforeEach(inject([AddEmployeeComponent], (loginForm: AddEmployeeComponent) => {
    component = loginForm;
  }));

  
  it('should create Add Employee Component', () => {
    expect(component).toBeTruthy();
  });

  it('should test updateEmail method', () => {
    component.ngOnInit();
    component.updateEmail();
    expect(component.addEmployeeForm.value['email']).toBe('.@mycompany.com');
  });


  it('should test addNewEmployee method - SUCCESS', fakeAsync(() => {
    let employeeService = TestBed.get(EmployeeService);
    let request = {"first_name":"lycus","last_name":"amanda","gender":"FEMALE","email":"lycus.amanda@mycompany.com","phone":"5757557757","joining_date":"2019-09-08T05:00:00.000Z","grade":"C2","role":"senior analyst","reporting_manager":"subin john","job_type":"FULL TIME","status":"ACTIVE"};
    spyOn(employeeService, 'addEmployee').and.returnValue(Promise.resolve(promisedData));
    component.addNewEmployee(request);
    tick();
    expect(component.addEmployeeForm.value['email']).toBe(null);
    expect(component.addEmployeeForm.value['first_name']).toBe(null);
    expect(component.addEmployeeForm.value['last_name']).toBe(null);
    expect(component.addEmployeeForm.value['gender']).toBe(null);
    expect(component.addEmployeeForm.value['phone']).toBe(null);
    expect(component.addEmployeeForm.value['joining_date']).toBe(null);
}));

it('should test addNewEmployee method- FAILURE', fakeAsync(() => {
  let employeeService = TestBed.get(EmployeeService);
  let request = {"first_name":"lycus","last_name":"amanda","gender":"FEMALE","email":"lycus.amanda@mycompany.com","phone":"5757557757","joining_date":"2019-09-08T05:00:00.000Z","grade":"C2","role":"senior analyst","reporting_manager":"subin john","job_type":"FULL TIME","status":"ACTIVE"};
  spyOn(employeeService, 'addEmployee').and.returnValue(Promise.reject(errorData));

  component.addNewEmployee(request);
  expect(component.addEmployeeForm.value['email']).toBe('');
  expect(component.addEmployeeForm.value['first_name']).toBe('');
  expect(component.addEmployeeForm.value['last_name']).toBe('');
  expect(component.addEmployeeForm.value['gender']).toBe('');
  expect(component.addEmployeeForm.value['phone']).toBe('');
  expect(component.addEmployeeForm.value['joining_date']).toBe('');
}));

it('should test addNewEmployee method- FAILURE - 404', fakeAsync(() => {
  let employeeService = TestBed.get(EmployeeService);
  let request = {"first_name":"lycus","last_name":"amanda","gender":"FEMALE","email":"lycus.amanda@mycompany.com","phone":"5757557757","joining_date":"2019-09-08T05:00:00.000Z","grade":"C2","role":"senior analyst","reporting_manager":"subin john","job_type":"FULL TIME","status":"ACTIVE"};
  errorData.status = 404;
  spyOn(employeeService, 'addEmployee').and.returnValue(Promise.reject(errorData));

  component.addNewEmployee(request);
  expect(component.addEmployeeForm.value['email']).toBe('');
  expect(component.addEmployeeForm.value['first_name']).toBe('');
  expect(component.addEmployeeForm.value['last_name']).toBe('');
  expect(component.addEmployeeForm.value['gender']).toBe('');
  expect(component.addEmployeeForm.value['phone']).toBe('');
  expect(component.addEmployeeForm.value['joining_date']).toBe('');
}));
  
});
