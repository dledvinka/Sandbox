import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../env';
import { Measurement } from '../entities/measurement';

@Injectable({
  providedIn: 'root'
})
export class MeasurementsService {

  constructor(private http: HttpClient) { }

  get_all() : Observable<Measurement[]> {
    return this.http
      .get<Measurement[]>(`${API_URL}/measurements`);
  }
}
