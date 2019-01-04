import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../env';
import { Measurement } from '../entities/measurement';
import { CommandResult } from '../entities/command-result';

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

	get_all(): Observable<Measurement[]> {
		const url = API_URL + '/measurements';
		return this.http
			.get<Measurement[]>(url);
	}

	insert(measurement: Measurement): Observable<CommandResult> {
		const url = API_URL + '/measurement';
		return this.http.post<CommandResult>(url, measurement, httpOptions);
		// .pipe(
		//   catchError(this.handleError('addHero', hero))
		// );
	}
}
