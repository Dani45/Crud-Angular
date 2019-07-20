import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EmployeesListComponent } from './employees-list/employees-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-Employee' },
  { path: 'employees-list', component: EmployeesListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
