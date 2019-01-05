import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../env';
import { TestMessage } from './test-message';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getTest(): Observable<TestMessage> {
    return this.http
      .get<TestMessage>(`${API_URL}/test`);
  }
}
