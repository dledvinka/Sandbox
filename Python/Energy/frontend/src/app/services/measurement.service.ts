import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { API_URL } from '../env';
import { Measurement } from '../entities/measurement';
import { CommandResult } from '../entities/command-result';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Measurement[]> {
    const url = API_URL + '/measurements';
    return this.http
      .get<Measurement[]>(url).pipe(
        catchError(this.handleError)
      );
  }

  get(id: Number): Observable<Measurement> {
    const url = API_URL + '/measurement/' + id;
    return this.http
      .get<Measurement>(url).pipe(
        catchError(this.handleError)
      );
  }

  delete(id: Number): Observable<void> {
    const url = API_URL + '/measurement/' + id;
    return this.http
      .delete<void>(url).pipe(
        catchError(this.handleError)
      );
  }

  insert(measurement: Measurement): Observable<Measurement> {
    const url = API_URL + '/measurement';
    return this.http.post<Measurement>(url, measurement, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  update(measurement: Measurement): Observable<Measurement> {
    const url = API_URL + '/measurement/' + measurement.id;
    return this.http.patch<Measurement>(url, measurement, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
