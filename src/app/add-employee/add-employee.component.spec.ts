import { AddEmployeeComponent } from './add-employee.component';
import { EmployeeModelComponent } from '../employee-model/employee-model.component';
import { ErrorModelComponent } from '../error-model/error-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;
  const mockMatDialog = {
    closeAll: (): void => undefined
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddEmployeeComponent, EmployeeModelComponent, ErrorModelComponent,  { provide: MatDialog, useValue: mockMatDialog }],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule]
    });
  });

  beforeEach(inject([AddEmployeeComponent], (loginForm: AddEmployeeComponent) => {
    component = loginForm;
  }));

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
