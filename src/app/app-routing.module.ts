import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesSearchComponent } from './employees-search/employees-search.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-Employee' },
  { path: 'employees-list', component: EmployeesListComponent },
  { path: 'employee-details', component: EmployeeDetailsComponent },
  { path: 'employees-search', component: EmployeesSearchComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
