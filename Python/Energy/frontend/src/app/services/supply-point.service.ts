import { Injectable } from '@angular/core';
import { SupplyPointListItemDto } from '../entities/supply-point-list-item-dto';
import { Observable, of } from 'rxjs';
import { SupplyPointDetailDto } from '../entities/supply-point-detail-dto';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SupplyPointSummaryDto } from '../entities/supply-point-summary-dto';

const summary: SupplyPointSummaryDto = {
  supplyPointId: 1, 
  summaryFor: [
    {
      measuredValue: {
        id: 1,
        isRequired: true,
        name: 'GAS',
        supplyPointId: 1,
        unit: 'm3'
      },
      currentPeriod: {
        from: new Date(2019, 1, 1),
        to: new Date(2019, 1, 31),
        estimateToDate: 200,
        estimateToDateComparison: {
          differenceAbsolute: 20,
          differenceRelative: 10
        },
        estimateEndOfPeriod: 400,
        estimateEndOfPeriodComparison: {
          differenceAbsolute: 40,
          differenceRelative: 10
        },
        realMeasurementsCount: 2
      },
      previousPeriods: [
        {
          from: new Date(2018, 12, 1),
          to: new Date(2018, 12, 31),
          periodConsumption: 500,
          shortTimeSamePeriodConsumption: 400,
          shortTimeSamePeriodComparison: {
            differenceAbsolute: 100,
            differenceRelative: 25
          },
          longTimeSamePeriodConsumption: 200,
          longTimeSamePeriodComparison: {
            differenceAbsolute: 300,
            differenceRelative: 150
          }
        }
      ]
    }
  ]
}

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
    return this.http.post<SupplyPointDetailDto>('/api/supply-points', model);
  }

  update(model: SupplyPointDetailDto): Observable<SupplyPointDetailDto> {
    return this.http.put<SupplyPointDetailDto>(`/api/supply-points/${model.id}`, model);
  }

  delete(id: number): Observable<SupplyPointDetailDto> {
    return this.http.delete<SupplyPointDetailDto>(`/api/supply-points/${id}`);
  }

  getSummary(id: number): Observable<SupplyPointSummaryDto> {
    return of(summary);
  }
}
