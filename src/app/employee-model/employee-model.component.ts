import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeeData } from './EmployeeData';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-model',
  templateUrl: './employee-model.component.html',
  styleUrls: ['./employee-model.component.less']
})
export class EmployeeModelComponent implements OnInit {
  editEmployeeForm: FormGroup;
  grades:string[]  = ['C1', "C2", "C3", "C4", "C5", "C6", "C7", "C8"];
  employmentStatus:string[]  = ['ACTIVE', 'DISABLED', 'HOLD'];
  employeeEdited:boolean = false;
  employeeEditedFailure:boolean = false;
  constructor(
    public dialogRef: MatDialogRef<EmployeeModelComponent>,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: EmployeeData
  ) { 
    this.createEditEmployeeForm();
  }
  
  /* This Method is to close the Model window based on the user action */
  cancelModelWindow(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.editEmployeeForm.controls['phone'].patchValue(this.data.phone);
    this.editEmployeeForm.controls['grade'].patchValue(this.data.grade);
    this.editEmployeeForm.controls['status'].patchValue(this.data.status);
  }

  createEditEmployeeForm() {
    this.editEmployeeForm = this.fb.group({
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)] ],
      grade: ['', Validators.required ],
      status: ['', Validators.required ]      
    });
  }

  updateEmployeeData(employeeData){
    let requestData = [];
    for(let prop in employeeData) {
      console.log(prop);
      requestData.push({"propName":prop, "value":employeeData[prop]});    
    }    
    this.employeeService.editEmployee(this.data.emp_id, requestData)
    .then(data =>{
      console.log("Edit Employee : - Success", data);
      this.employeeEdited = true;
    }).catch(error=>{
      console.log("Edit Employee: - Error", error);
      this.employeeEditedFailure = true;
    })

  }

}
