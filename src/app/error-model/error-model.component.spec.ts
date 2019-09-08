import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ErrorModelComponent } from './error-model.component';

describe('ErrorModelComponent', () => {
  let component: ErrorModelComponent;
  let fixture: ComponentFixture<ErrorModelComponent>;
  const mockMatDialog = {
    closeAll: (): void => undefined
  };
  const dialogMock = {
    close: () => { }
   };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      providers: [ErrorModelComponent,  
        { provide: MatDialog, useValue: mockMatDialog },  
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: dialogMock }
    ],
      declarations: [ ErrorModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Error Model Component', () => {
    expect(component).toBeTruthy();
  });

  it('should test the closeModelWindow methos', () => {
    component.closeModelWindow();
  });
});
