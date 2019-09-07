import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-error-model',
  templateUrl: './error-model.component.html',
  styleUrls: ['./error-model.component.less']
})
export class ErrorModelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ErrorModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
  }

  closeModelWindow(){
    this.dialogRef.close();
  }
}
