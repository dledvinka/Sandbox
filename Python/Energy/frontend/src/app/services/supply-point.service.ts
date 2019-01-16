import { Injectable } from '@angular/core';
import { SupplyPointListItemDto } from '../entities/supply-point-list-item-dto';
import { Observable, of } from 'rxjs';
import { SupplyPointDetailDto } from '../entities/supply-point-detail-dto';

const supplyPoints: SupplyPointListItemDto[] = [
  { id: 1, name: 'My place 1' },
  { id: 2, name: 'My place 2' },
  { id: 3, name: 'My place 3' },
];

const supplyPointDetail: SupplyPointDetailDto = {
  id: 1,
  name: 'My place 1',
  address: 'My address 1',
  comment: 'My comment 1'
};

@Injectable({
  providedIn: 'root'
})
export class SupplyPointService {
  constructor() { }

  getAll(): Observable<SupplyPointListItemDto[]> {
    return of(supplyPoints);
  }

  get(id: number): Observable<SupplyPointDetailDto> {
    return of(supplyPointDetail);
  }
}
