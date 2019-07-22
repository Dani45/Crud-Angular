import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesSearchComponent } from './employees-search/employees-search.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeeDetailsComponent,
    EmployeesSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
