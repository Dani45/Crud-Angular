import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Employee } from '../model/employee';
import { retry, catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestsApiService {
  apiRoot: string = "https://api.chucknorris.io/jokes/search";


  constructor(private http: HttpClient) { }

  // search(query: string): Observable<Employee> {
  //   let apiURL = `${this.apiURLo}?query=${query}`;
  //   console.log( apiURL)
  //   return this.http.get<Employee>(apiURL)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     )
  // }


  search(query: string): Observable<any> {
   
    if (!query || query === '*') {
      query = '';
    } else {
      query = query.toLowerCase();
    }
     return this.http.get( `${this.apiRoot}?query=${query}`).
     pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
