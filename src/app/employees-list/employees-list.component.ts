import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  Employee: Employee; 


  constructor(
    private restApi: RestApiService
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

  // Delete employee
  deleteEmployee(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteEmployee(id).subscribe(data => {
        this.loadEmployees()
      })
    }
  }

}