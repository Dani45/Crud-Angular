import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RestsApiService } from '../services/rests-api.service';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-employees-search',
  templateUrl: './employees-search.component.html',
  styleUrls: ['./employees-search.component.css']
})
export class EmployeesSearchComponent implements OnInit {
  private loading: boolean = false;
  private employees: Observable<Employee>;
  private searchField: FormControl;

  constructor(private restsApi: RestsApiService) { }
  ngOnInit() {
    this.cargar();

  }

  cargar() {
    this.searchField = new FormControl();

    this.employees = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(_ => (this.loading = true)),
      switchMap(
        query =>{ 
          console.log(query)
          return this.restsApi.search(query)}),
      
      tap(_ => (this.loading = false))
    );
  }


  doSearch(query: string) {
    this.restsApi.search(query);
    console.log(
      this.restsApi.search(query))
  }
}
