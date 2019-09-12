import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.less']
})
export class DeleteEmployeeComponent implements OnInit {
  deleteSuccess:boolean = false;
  deleteError:boolean = false;
  constructor( 
    public dialogRef: MatDialogRef<DeleteEmployeeComponent>,
    private employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  /*Delete selected User */
  deleteSelectedUser(employeeData){  
    this.employeeService.deleteSelectedUser(this.data.emp_id)
    .then(data =>{
      console.log("Delete Employee : - Success", data);
      this.deleteSuccess = true;
    }).catch(error=>{
      console.log("Edit Employee: - Error", error);
      this.deleteError = true;
    })

  }

  /* This Method is to close the Model window based on the user action */
  closeModelWindow(){
    this.dialogRef.close();
  }

}
