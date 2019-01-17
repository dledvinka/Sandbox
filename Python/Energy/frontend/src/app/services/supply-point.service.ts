import { Injectable } from '@angular/core';
import { SupplyPointListItemDto } from '../entities/supply-point-list-item-dto';
import { Observable, of } from 'rxjs';
import { SupplyPointDetailDto } from '../entities/supply-point-detail-dto';
import { delay } from 'rxjs/operators';

const supplyPoints: SupplyPointListItemDto[] = [
  { id: 1, name: 'My place 1' },
  { id: 2, name: 'My place 2' },
  { id: 3, name: 'My place 3' },
];

const supplyPointDetail: SupplyPointDetailDto = {
  id: 1,
  name: 'My place 1',
  address: 'My address 1',
  comment: 'My comment 1',
  measuredValues: [
    {
      id: 1,
      supplyPointId: 1,
      name: 'Electricity high rate',
      measuredValueTypeId: 1,
      measuredValueName: 'Electricity consumption',
      unitId: 1,
      unitName: 'kWh',
      isRequired: false
    },
    {
      id: 2,
      supplyPointId: 1,
      name: 'Electricity low rate',
      measuredValueTypeId: 1,
      measuredValueName: 'Electricity consumption',
      unitId: 1,
      unitName: 'kWh',
      isRequired: false
    },
    {
      id: 3,
      supplyPointId: 1,
      name: 'Gas',
      measuredValueTypeId: 2,
      measuredValueName: 'Gas consumption',
      unitId: 2,
      unitName: 'm3',
      isRequired: false
    }
  ]
};

@Injectable({
  providedIn: 'root'
})
export class SupplyPointService {
  constructor() { }

  getAll(): Observable<SupplyPointListItemDto[]> {
    console.log('SupplyPointService.getAll', supplyPoints);
    return of(supplyPoints);
  }

  get(id: number): Observable<SupplyPointDetailDto> {
    console.log('SupplyPointService.get, id = ', id, supplyPointDetail);
    return of(supplyPointDetail);
  }

  insert(model: SupplyPointDetailDto): Observable<SupplyPointDetailDto> {
    console.log('SupplyPointService.insert', model);
    return of(model).pipe(delay(500));
  }

  update(model: SupplyPointDetailDto): Observable<SupplyPointDetailDto> {
    console.log('SupplyPointService.update', model);
    return of(model).pipe(delay(500));
  }

  delete(id: number): Observable<void> {
    console.log('SupplyPointService.delete', id);
    return of();
  }
}
