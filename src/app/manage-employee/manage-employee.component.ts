import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeService } from '../employee.service';
import { EmployeeModelComponent } from '../employee-model/employee-model.component';


@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.less']
})
export class ManageEmployeeComponent implements OnInit {
  searchOptions:string[]  = ['User Id', "Email", "First Name", "Last Name"];
  employeeList;
  searchEmployeeForm: FormGroup;
  constructor(private fb: FormBuilder, public dialog: MatDialog, private employeeService: EmployeeService) { 
    this.createSearchForm();
  }

  ngOnInit() {
  }

  createSearchForm(){
    this.searchEmployeeForm = this.fb.group({
      search_option: ['', Validators.required ],
      search_value: ['', Validators.required ] 
    });
  }

  searchEmployee(option, value){
    this.employeeList = [];
    if(option && value) {
      let request = {'option': option, 'value': value.toUpperCase()};
      this.employeeService.searchEmployee(request)
    .then(data =>{
      console.log("Search Employee : - Success", data);
      this.employeeList = data;
      this.searchEmployeeForm.reset();
      this.searchEmployeeForm.controls['search_option'].setErrors(null);
    }).catch(error=>{
      console.log("Search Employee : - Error", error)
    })
    }
  }

  editEmployee(employee){
    employee['form_type'] = 'edit';
    const dialogRef = this.dialog.open(EmployeeModelComponent, {
      width: '80%',
      disableClose: true,
      data: employee
    });
    this.employeeList = [];
  }
  deleteEmployee(employee){
    if(confirm("Are you sure to delete "+employee.first_name)) {
      console.log("Implement delete functionality here");
    }
  }

}
