import { Injectable } from '@angular/core';
import { SupplyPointListItemDto } from '../entities/supply-point-list-item-dto';
import { Observable, of } from 'rxjs';
import { SupplyPointDetailDto } from '../entities/supply-point-detail-dto';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplyPointService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<SupplyPointListItemDto[]> {
    return this.http.get<SupplyPointListItemDto[]>('/api/supply-points');
  }

  get(id: Number): Observable<SupplyPointDetailDto> {
    return this.http.get<SupplyPointDetailDto>('/api/supply-points/' + id);
  }

  insert(model: SupplyPointDetailDto): Observable<SupplyPointDetailDto> {
    console.log('SupplyPointService::insert', model);
    return of(model).pipe(delay(500));
  }

  update(model: SupplyPointDetailDto): Observable<SupplyPointDetailDto> {
    console.log('SupplyPointService::update', model);
    return of(model).pipe(delay(500));
  }

  delete(id: number): Observable<void> {
    console.log('SupplyPointService::delete', id);
    return of();
  }
}
