import { EmployeeModelComponent } from '../employee-model/employee-model.component';
import { ErrorModelComponent } from '../error-model/error-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule, MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, inject, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { ManageEmployeeComponent } from './manage-employee.component';

describe('ManageEmployeeComponent', () => {
  const promisedData = [{ "_id": "5d58cbbcda13013794cfb9fd", "emp_id": "800001", "first_name": "SUBIN", "last_name": "JOHN", "email": "subin.john@company.com", "phone": "4699950680", "grade": "C6", "role": "Technical Manager", "reporting_manager": "Adam Hills", "joining_date": "08-16-2014", "job_type": "FULL TIME", "status": "ACTIVE", "__v": 0 }];
  const errorData = { "headers": { "normalizedNames": {}, "lazyUpdate": null, "headers": {} }, "status": 0, "statusText": "Unknown Error", "url": "http://ec2-52-15-122-154.us-east-2.compute.amazonaws.com:3000/employee/", "ok": false, "name": "HttpErrorResponse", "message": "Http failure response for http://ec2-52-15-122-154.us-east-2.compute.amazonaws.com:3000/employee/: 0 Unknown Error", "error": { "isTrusted": true } };
  let component: ManageEmployeeComponent;
  let fixture: ComponentFixture<ManageEmployeeComponent>;
  const mockMatDialog = {
    closeAll: (): void => undefined,
    open: (): void => undefined
  };

  const dialogMock = {
    close: () => { },
    open: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ManageEmployeeComponent, EmployeeModelComponent, ErrorModelComponent, EmployeeService,
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: MatDialogRef, useValue: dialogMock }],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule, MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule, MatSelectModule, MatDialogModule, BrowserAnimationsModule],
      declarations: [ManageEmployeeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Manage Employee Component', () => {
    expect(component.noresult).toBe(false);
  });
  it('should test disableLoading method', () => {
    component.disableLoading();
    expect(component.noresult).toBe(false);
  });

  it('should test enableLoading method', () => {
    component.enableLoading();
    expect(component.noresult).toBe(false);
  });

  it('should test deleteEmployee method', () => {
    component.deleteEmployee({});
    expect(component.employeeList.length).toBe(0);
  });

  it('should test editEmployee method', () => {
    component.editEmployee({});
    expect(component.employeeList.length).toBe(0);
  });

  it('should test searchEmployee method - SUCCESS', fakeAsync(() => {
    let employeeService = TestBed.get(EmployeeService);
    let request = { "first_name": "lycus", "last_name": "amanda", "gender": "FEMALE", "email": "lycus.amanda@mycompany.com", "phone": "5757557757", "joining_date": "2019-09-08T05:00:00.000Z", "grade": "C2", "role": "senior analyst", "reporting_manager": "subin john", "job_type": "FULL TIME", "status": "ACTIVE" };
    spyOn(employeeService, 'searchEmployee').and.returnValue(Promise.resolve(promisedData));
    component.searchEmployee('first name', 'subin');
    tick();
    expect(component.employeeList.length).toBe(1);
  }));

  it('should test searchEmployee method - SUCCESS - NO DATA', fakeAsync(() => {
    let employeeService = TestBed.get(EmployeeService);
    let request = { "first_name": "lycus", "last_name": "amanda", "gender": "FEMALE", "email": "lycus.amanda@mycompany.com", "phone": "5757557757", "joining_date": "2019-09-08T05:00:00.000Z", "grade": "C2", "role": "senior analyst", "reporting_manager": "subin john", "job_type": "FULL TIME", "status": "ACTIVE" };
    spyOn(employeeService, 'searchEmployee').and.returnValue(Promise.resolve([]));
    component.searchEmployee('first name', 'subin');
    tick();
    expect(component.employeeList.length).toBe(0);
  }));

  it('should test searchEmployee method - FAILURE', fakeAsync(() => {
    let employeeService = TestBed.get(EmployeeService);
    let request = { "first_name": "lycus", "last_name": "amanda", "gender": "FEMALE", "email": "lycus.amanda@mycompany.com", "phone": "5757557757", "joining_date": "2019-09-08T05:00:00.000Z", "grade": "C2", "role": "senior analyst", "reporting_manager": "subin john", "job_type": "FULL TIME", "status": "ACTIVE" };
    spyOn(employeeService, 'searchEmployee').and.returnValue(Promise.reject(errorData));
    component.searchEmployee('first name', 'subin');
    expect(component.employeeList.length).toBe(0);
  }));

  it('should test searchEmployee method - INVALID INPUT', fakeAsync(() => {
    component.searchEmployee(undefined, 'subin');
    expect(component.employeeList.length).toBe(0);
  }));

});
