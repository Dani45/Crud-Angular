import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestlApiService {
// Define API
apiURLo = 'http://localhost:3000';

constructor(private http: HttpClient) { }

/*========================================
  CRUD Methods for consuming RESTful API
=========================================*/

// Http Options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}  

// HttpClient API get() method => Fetch employees list
getlocal(): Observable<Employee> {
  return this.http.get<Employee>(this.apiURLo + '/employees')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// HttpClient API delete() method => Delete employee
deleteEmployee(id){
  return this.http.delete<Employee>(this.apiURLo + '/employees/' + id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// Error handling 
handleError(error) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
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