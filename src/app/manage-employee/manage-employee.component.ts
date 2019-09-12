import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeService } from '../employee.service';
import { EmployeeModelComponent } from '../employee-model/employee-model.component';
import { LoaderComponent } from '../loader/loader.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';


@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.less']
})
export class ManageEmployeeComponent implements OnInit {
  searchOptions: string[] = ['User Id', "Email", "First Name", "Last Name"];
  employeeList;
  searchEmployeeForm: FormGroup;
  noresult:boolean = false;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private employeeService: EmployeeService
  ) {
    this.createSearchForm();
  }

  ngOnInit() {
  }

  createSearchForm() {
    this.searchEmployeeForm = this.fb.group({
      search_option: ['', Validators.required],
      search_value: ['', Validators.required]
    });
  }

  searchEmployee(option, value) {
    this.employeeList = [];
    this.noresult = false;
    this.enableLoading();
    if (option && value) {
      let request = { 'option': option, 'value': value.toUpperCase() };
      this.employeeService.searchEmployee(request)
        .then(data => {
          console.log("Search Employee : - Success", data);
          this.employeeList = data;
          if(this.employeeList.length <1){
            this.noresult = true;
          }
          this.searchEmployeeForm.reset();
          this.searchEmployeeForm.controls['search_option'].setErrors(null);
          this.disableLoading();
        }).catch(error => {
          console.log("Search Employee : - Error", error)
        })
    }
  }

  editEmployee(employee) {
    employee['form_type'] = 'edit';
    const dialogRef = this.dialog.open(EmployeeModelComponent, {
      width: '80%',
      disableClose: true,
      data: employee
    });
    this.employeeList = [];
  }

  deleteEmployee(employee) {
    const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
      width: '80%',
      panelClass:'delete-employee',
      disableClose: true,
      data: employee
    });
    this.employeeList = [];
  }

  /*This method is to enable the loading screen*/
  enableLoading() {
    const dialogRef = this.dialog.open(LoaderComponent, {
      panelClass: 'transparent',
      disableClose: true,
    });
  }

  /*This method is to disable the loading screen*/
  disableLoading() {
    this.dialog.closeAll();
  }

}
