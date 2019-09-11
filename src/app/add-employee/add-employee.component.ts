import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeService } from '../employee.service';
import { EmployeeModelComponent } from '../employee-model/employee-model.component';
import { ErrorModelComponent } from '../error-model/error-model.component';

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

  constructor(private fb: FormBuilder, public dialog: MatDialog, private employeeService: EmployeeService) {
    this.createEmployeeForm();
   }

  ngOnInit() {
  }

  /* This Method is to create and validate the Employee Form */
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

    /* This Method is to call the Employee service to add new employee */
  addNewEmployee(requestData) {
    this.newEmployee = {};
    this.employeeService.addEmployee(requestData)
    .then(data =>{
      console.log("Add new Employee : - Success", data);
      data['form_type'] = 'add';
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
      console.log("Add new Employee : - Error", error)
      if(error.status == 404){
        error.message = 'Email Address :'+this.addEmployeeForm.value.email+' already exists. Please choose different email address';
      }
      const dialogRef = this.dialog.open(ErrorModelComponent, {
        width: '60%',
        disableClose: true,
        backdropClass:'error-model',
        panelClass: 'error-model',
        data: error
      });
    })
  }
  
  /*This method is to update the email field when user typing the first name and last name*/
  updateEmail(){
    let emailAddress: string = this.addEmployeeForm.value.first_name +'.'+this.addEmployeeForm.value.last_name+'@mycompany.com';
    this.addEmployeeForm.controls['email'].patchValue(emailAddress);
  }

}
