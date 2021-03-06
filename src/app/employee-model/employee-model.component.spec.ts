import { TestBed, inject, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule, MatDialogModule  } from '@angular/material';
import { EmployeeService } from '../employee.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeData } from './EmployeeData';
import { EmployeeModelComponent } from './employee-model.component';

describe('EmployeeModelComponent', () => {
  const promisedData = [{ "_id": "5d58cbbcda13013794cfb9fd", "emp_id": "800001", "first_name": "SUBIN", "last_name": "JOHN", "email": "subin.john@company.com", "phone": "4699950680", "grade": "C6", "role": "Technical Manager", "reporting_manager": "Adam Hills", "joining_date": "08-16-2014", "job_type": "FULL TIME", "status": "ACTIVE", "__v": 0 }];
  const errorData = { "headers": { "normalizedNames": {}, "lazyUpdate": null, "headers": {} }, "status": 0, "statusText": "Unknown Error", "url": "http://ec2-52-15-122-154.us-east-2.compute.amazonaws.com:3000/employee/", "ok": false, "name": "HttpErrorResponse", "message": "Http failure response for http://ec2-52-15-122-154.us-east-2.compute.amazonaws.com:3000/employee/: 0 Unknown Error", "error": { "isTrusted": true } };
  let component: EmployeeModelComponent;
  let fixture: ComponentFixture<EmployeeModelComponent>;
  const mockMatDialog = {
    closeAll: (): void => undefined
  };
  const dialogMock = {
    close: () => { }
   };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule, ReactiveFormsModule, HttpClientModule, MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule, MatSelectModule, MatDialogModule],
      providers: [EmployeeModelComponent,  
        { provide: MatDialog, useValue: mockMatDialog },  
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: dialogMock }
    ],
      declarations: [ EmployeeModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Employee Model Component', () => {
    expect(component).toBeTruthy();
  });

  it('should Test the cancelModelWindow method', () => {
    component.cancelModelWindow();
    expect(component).toBeTruthy();
  });

  it('should Test the updateEmployeeData method', () => {
    let employee = {"_id":"5d58cbbcda13013794cfb9fd","emp_id":"800001","first_name":"SUBIN","last_name":"JOHN","email":"subin.john@company.com","phone":"4699950680","grade":"C6","role":"Technical Manager","reporting_manager":"Adam Hills","joining_date":"08-16-2014","job_type":"FULL TIME","status":"ACTIVE","__v":0};
    component.updateEmployeeData(employee);
    expect(component.employeeEdited).toBe(false);
  });

  it('should test searchEmployee method - SUCCESS', fakeAsync(() => {
    let employeeService = TestBed.get(EmployeeService);
    let employee = {"_id":"5d58cbbcda13013794cfb9fd","emp_id":"800001","first_name":"SUBIN","last_name":"JOHN","email":"subin.john@company.com","phone":"4699950680","grade":"C6","role":"Technical Manager","reporting_manager":"Adam Hills","joining_date":"08-16-2014","job_type":"FULL TIME","status":"ACTIVE","__v":0};
    spyOn(employeeService, 'editEmployee').and.returnValue(Promise.resolve(promisedData));
    component.updateEmployeeData(employee);
    tick();
    expect(component.employeeEdited).toBe(true);
  }));
  it('should test searchEmployee method - ERROR', fakeAsync(() => {
    let employeeService = TestBed.get(EmployeeService);
    let employee = {"_id":"5d58cbbcda13013794cfb9fd","emp_id":"800001","first_name":"SUBIN","last_name":"JOHN","email":"subin.john@company.com","phone":"4699950680","grade":"C6","role":"Technical Manager","reporting_manager":"Adam Hills","joining_date":"08-16-2014","job_type":"FULL TIME","status":"ACTIVE","__v":0};
    spyOn(employeeService, 'editEmployee').and.returnValue(Promise.reject(errorData));
    component.updateEmployeeData(employee);
    tick();
    expect(component.employeeEditedFailure).toBe(true);
  }));
});
