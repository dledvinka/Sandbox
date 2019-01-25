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

const measurements: MeasurementDto[] = [
  {
    id: 1,
    supplyPointId: 1,
    created: new Date(Date.UTC(2018, 10, 1)),
    dateTaken: new Date(Date.UTC(2018, 10, 1)),
    values: [
      { id: 1, supplyPointMeasuredValueId: 1, value: 20000, label: 'EHR' },
      { id: 2, supplyPointMeasuredValueId: 2, value: 40000, label: 'ELR' },
      { id: 3, supplyPointMeasuredValueId: 3, value: 5000, label: 'GAS' }
    ]
  },
  {
    id: 2,
    supplyPointId: 1,
    created: new Date(Date.UTC(2018, 11, 1)),
    dateTaken: new Date(Date.UTC(2018, 11, 1)),
    values: [
      { id: 4, supplyPointMeasuredValueId: 1, value: 22000, label: 'EHR' },
      { id: 5, supplyPointMeasuredValueId: 2, value: 42000, label: 'ELR' },
      { id: 6, supplyPointMeasuredValueId: 3, value: 5500, label: 'GAS' }
    ]
  },
  {
    id: 3,
    supplyPointId: 1,
    created: new Date(Date.UTC(2018, 12, 1)),
    dateTaken: new Date(Date.UTC(2018, 12, 1)),
    values: [
      { id: 7, supplyPointMeasuredValueId: 1, value: 24000, label: 'EHR' },
      { id: 8, supplyPointMeasuredValueId: 2, value: 44000, label: 'ELR' },
      { id: 9, supplyPointMeasuredValueId: 3, value: 6000, label: 'GAS' }
    ]
  },
  {
    id: 4,
    supplyPointId: 1,
    created: new Date(Date.UTC(2019, 1, 1)),
    dateTaken: new Date(Date.UTC(2019, 1, 1)),
    values: [
      { id: 10, supplyPointMeasuredValueId: 1, value: 26000, label: 'EHR' },
      { id: 11, supplyPointMeasuredValueId: 2, value: 46000, label: 'ELR' },
      { id: 12, supplyPointMeasuredValueId: 3, value: 6500, label: 'GAS' }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {
  constructor(private http: HttpClient) { }

  getAll(supplyPointId: number): Observable<MeasurementDto[]> {
    return of(measurements).pipe(delay(500));
    // const url = API_URL + '/measurements';
    // return this.http
    //   .get<Measurement[]>(url).pipe(
    //     catchError(this.handleError)
    //   );
  }

  get(id: Number): Observable<MeasurementDto> {
    if (id) {
      console.log('return', id);
      return of(measurements.find((m) => m.id === id)).pipe(delay(500));
    } else {
      console.log('return undefined');
      return of(undefined);
    }
    // const url = API_URL + '/measurement/' + id;
    // return this.http
    //   .get<Measurement>(url).pipe(
    //     catchError(this.handleError)
    //   );
  }

  insert(model: MeasurementDto): Observable<MeasurementDto> {
    console.log('MeasurementService::insert', model);
    return of(model).pipe(delay(500));
  }

  update(model: MeasurementDto): Observable<MeasurementDto> {
    console.log('MeasurementService::update', model);
    return of(model).pipe(delay(500));
  }

  delete(id: Number): Observable<void> {
    console.log('MeasurementService::delete', id);
    return of();
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
