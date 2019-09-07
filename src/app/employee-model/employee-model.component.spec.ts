import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeData } from './EmployeeData';
import { EmployeeModelComponent } from './employee-model.component';

describe('EmployeeModelComponent', () => {
  let component: EmployeeModelComponent;
  let fixture: ComponentFixture<EmployeeModelComponent>;
  const mockMatDialog = {
    closeAll: (): void => undefined
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      providers: [EmployeeModelComponent,  { provide: MatDialog, useValue: mockMatDialog },  { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ],
      declarations: [ EmployeeModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
