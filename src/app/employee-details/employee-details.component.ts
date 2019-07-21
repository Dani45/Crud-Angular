import { Component, OnInit } from '@angular/core';
import { RestlApiService } from "../services/restl-api.service";


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  Employee: any = [];

  constructor(
    public restlApi: RestlApiService
  ) { }

  ngOnInit() {
    this.cargaLocal()
  }

  // Get employees list
  cargaLocal() {
    return this.restlApi.getlocal().subscribe((data: {}) => {
      this.Employee = data;
      console.log(data)
    })
  }

  // Delete employee
  deleteEmployee(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restlApi.deleteEmployee(id).subscribe(data => {
        this.cargaLocal()
      })
    }
  }  
}
