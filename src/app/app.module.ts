import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppRoutingModule } from './/app-routing.module';
import { MaterialModule } from './material/material.module';
import { EmployeeModelComponent } from './employee-model/employee-model.component';
import { ErrorModelComponent } from './error-model/error-model.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddEmployeeComponent,
    EmployeeModelComponent,
    ErrorModelComponent,
    ManageEmployeeComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [EmployeeModelComponent, ErrorModelComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
