import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { API_URL } from '../env';
import { MeasurementDto } from '../entities/measurement-dto';
import { CommandResult } from '../entities/command-result';
import { catchError, delay } from 'rxjs/operators';

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

  getAll(supplyPointId: number): Observable<MeasurementDto[]> {
    return this.http.get<MeasurementDto[]>('/api/supply-points/' + supplyPointId + '/measurements/');
    // const url = API_URL + '/measurements';
    // return this.http
    //   .get<Measurement[]>(url).pipe(
    //     catchError(this.handleError)
    //   );
  }

  get(supplyPointId: number, measurementId: Number): Observable<MeasurementDto> {
    return this.http.get<MeasurementDto>(`/api/supply-points/${supplyPointId}/measurements/${measurementId}`);
  }

  insert(model: MeasurementDto): Observable<MeasurementDto> {
    console.log('MeasurementService::insert', model);
    return this.http.post<MeasurementDto>(`/api/supply-points/${model.supplyPointId}/measurements`, model);
  }

  update(model: MeasurementDto): Observable<MeasurementDto> {
    console.log('MeasurementService::update', model);
    return this.http.put<MeasurementDto>(`/api/supply-points/${model.supplyPointId}/measurements/${model.id}`, model);
  }

  delete(model: MeasurementDto): Observable<MeasurementDto> {
    console.log('MeasurementService::delete', model);
    return this.http.delete<MeasurementDto>(`/api/supply-points/${model.supplyPointId}/measurements/${model.id}`);
  }

  // delete(id: Number): Observable<void> {
  //   const url = API_URL + '/measurement/' + id;
  //   return this.http
  //     .delete<void>(url).pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // insert(measurement: Measurement): Observable<Measurement> {
  //   const url = API_URL + '/measurement';
  //   return this.http.post<Measurement>(url, measurement, httpOptions).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // update(measurement: Measurement): Observable<Measurement> {
  //   const url = API_URL + '/measurement/' + measurement.id;
  //   return this.http.patch<Measurement>(url, measurement, httpOptions).pipe(
  //     catchError(this.handleError)
  //   );
  // }

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
