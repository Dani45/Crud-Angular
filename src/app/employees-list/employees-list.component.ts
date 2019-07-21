import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Employee } from '../model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  Employee: Employee; 


  constructor(
    private restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() {
    this.loadEmployees();
  
  }


  refresh(): void {
    window.location.reload();
}
  // Get employees list
  loadEmployees() {
    this.restApi.getEmployees().subscribe((data) => {
      this.Employee= data;
      console.log(this.Employee); 
    })
  }

  addEmployee(dataEmployee) {
    this.restApi.createEmployee(this.Employee).subscribe((data: {}) => {
      this.router.navigate(['/employees-list'])
      console.log(data); 
    })
  }


}