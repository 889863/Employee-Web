import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {VERSION, MatDialog, MatDialogRef} from '@angular/material';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.less']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm: FormGroup;
  grades:string[]  = ['C1', "C2", "C3", "C4", "C5", "C6", "C7", "C8"];
  employmentTypes:string[]  = ['FULL TIME', 'CONTRACT'];
  employmentStatus:string[]  = ['ACTIVE', 'DISABLED', 'HOLD'];
  newEmployee = {};

  myNumber : number = 12;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.createEmployeeForm();
   }

  ngOnInit() {
  }

  createEmployeeForm() {
    this.addEmployeeForm = this.fb.group({
      first_name: ['', Validators.required ],
      last_name: ['', Validators.required ],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ],
      phone: ['', Validators.required ],
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
      console.log("++++++++++++++++++++", data);
      this.addEmployeeForm.reset();
    }).catch(error=>{
      console.log("********************", error);
    })
  }

}
