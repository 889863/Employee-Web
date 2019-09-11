import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'manage-employee', component: ManageEmployeeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
