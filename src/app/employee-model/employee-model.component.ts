import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EmployeeData } from './EmployeeData';

@Component({
  selector: 'app-employee-model',
  templateUrl: './employee-model.component.html',
  styleUrls: ['./employee-model.component.less']
})
export class EmployeeModelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EmployeeModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmployeeData
  ) { }

  addNewEmployee(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

  }

}
