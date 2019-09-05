import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeService } from '../employee.service';
import { EmployeeModelComponent } from '../employee-model/employee-model.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.less']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm: FormGroup;
  grades:string[]  = ['C1', "C2", "C3", "C4", "C5", "C6", "C7", "C8"];
  genders:string[]  = ['MALE', 'FEMALE'];
  employmentTypes:string[]  = ['FULL TIME', 'CONTRACT'];
  employmentStatus:string[]  = ['ACTIVE', 'DISABLED', 'HOLD'];
  newEmployee = {};

  myNumber : number = 12;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private employeeService: EmployeeService) {
    this.createEmployeeForm();
   }

  ngOnInit() {
  }

  createEmployeeForm() {
    this.addEmployeeForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      gender:['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)] ],
      joining_date: ['', Validators.required ],
      grade: ['', Validators.required ],
      role: [''],
      reporting_manager: [''],
      job_type: ['', Validators.required ],
      status: ['', Validators.required ],
      
      
    });
  }

  addNewEmployee(requestData) {
    console.log("this is here", requestData);
    console.log(this.newEmployee);
    this.newEmployee = {};
    this.employeeService.addEmployee(requestData)
    .then(data =>{
      const dialogRef = this.dialog.open(EmployeeModelComponent, {
        width: '80%',
        disableClose: true,
        data: data
      });
      this.addEmployeeForm.reset();
      this.addEmployeeForm.controls['gender'].setErrors(null);
      this.addEmployeeForm.controls['joining_date'].setErrors(null);
      this.addEmployeeForm.controls['grade'].setErrors(null);
      this.addEmployeeForm.controls['job_type'].setErrors(null);
      this.addEmployeeForm.controls['status'].setErrors(null);
    }).catch(error=>{
      console.log("********************", error);
    })
  }

}
