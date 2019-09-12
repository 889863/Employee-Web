import { TestBed, inject, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { DeleteEmployeeComponent } from './delete-employee.component';

describe('DeleteEmployeeComponent', () => {
  const promisedData = [{ "_id": "5d58cbbcda13013794cfb9fd", "emp_id": "800001", "first_name": "SUBIN", "last_name": "JOHN", "email": "subin.john@company.com", "phone": "4699950680", "grade": "C6", "role": "Technical Manager", "reporting_manager": "Adam Hills", "joining_date": "08-16-2014", "job_type": "FULL TIME", "status": "ACTIVE", "__v": 0 }];
  const errorData = { "headers": { "normalizedNames": {}, "lazyUpdate": null, "headers": {} }, "status": 0, "statusText": "Unknown Error", "url": "http://ec2-52-15-122-154.us-east-2.compute.amazonaws.com:3000/employee/", "ok": false, "name": "HttpErrorResponse", "message": "Http failure response for http://ec2-52-15-122-154.us-east-2.compute.amazonaws.com:3000/employee/: 0 Unknown Error", "error": { "isTrusted": true } };
  let component: DeleteEmployeeComponent;
  let fixture: ComponentFixture<DeleteEmployeeComponent>;
  const mockMatDialog = {
    closeAll: (): void => undefined
  };
  const dialogMock = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientModule],
      providers: [DeleteEmployeeComponent,  
        { provide: MatDialog, useValue: mockMatDialog },  
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: dialogMock }
    ],
      declarations: [ DeleteEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Delete Employee Component ', () => {
    expect(component).toBeTruthy();
  });
  it('should test closeModelWindow method ', () => {
    component.closeModelWindow();
    expect(component).toBeTruthy();
  });

  it('should test deleteSelectedUser method - SUCCESS', fakeAsync(() => {
    let employeeService = TestBed.get(EmployeeService);
    let employee = {"_id":"5d58cbbcda13013794cfb9fd","emp_id":"800001","first_name":"SUBIN","last_name":"JOHN","email":"subin.john@company.com","phone":"4699950680","grade":"C6","role":"Technical Manager","reporting_manager":"Adam Hills","joining_date":"08-16-2014","job_type":"FULL TIME","status":"ACTIVE","__v":0};
    component.data = employee;
    spyOn(employeeService, 'deleteSelectedUser').and.returnValue(Promise.resolve(promisedData));
    component.deleteSelectedUser(employee);
    tick();
    expect(component.deleteSuccess).toBe(true);
  }));

  it('should test deleteSelectedUser method - ERROR', fakeAsync(() => {
    let employeeService = TestBed.get(EmployeeService);
    let employee = {"_id":"5d58cbbcda13013794cfb9fd","emp_id":"800001","first_name":"SUBIN","last_name":"JOHN","email":"subin.john@company.com","phone":"4699950680","grade":"C6","role":"Technical Manager","reporting_manager":"Adam Hills","joining_date":"08-16-2014","job_type":"FULL TIME","status":"ACTIVE","__v":0};
    component.data = employee;
    spyOn(employeeService, 'deleteSelectedUser').and.returnValue(Promise.reject(errorData));
    component.deleteSelectedUser(employee);
    tick();
    expect(component.deleteError).toBe(true);
  }));
});
