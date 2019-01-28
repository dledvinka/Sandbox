import { Injectable } from '@nestjs/common';
import { MeasurementDto } from 'src/entities/entities.dto';

const measurements: MeasurementDto[] = [
  {
    id: 1,
    supplyPointId: 1,
    created: new Date(Date.UTC(2018, 10, 1)),
    dateTaken: new Date(Date.UTC(2018, 10, 1)),
    values: [
      { id: 1, supplyPointMeasuredValueId: 1, value: 20000, label: 'EHR' },
      { id: 2, supplyPointMeasuredValueId: 2, value: 40000, label: 'ELR' },
      { id: 3, supplyPointMeasuredValueId: 3, value: 5000, label: 'GAS' },
    ],
  },
  {
    id: 2,
    supplyPointId: 1,
    created: new Date(Date.UTC(2018, 11, 1)),
    dateTaken: new Date(Date.UTC(2018, 11, 1)),
    values: [
      { id: 4, supplyPointMeasuredValueId: 1, value: 22000, label: 'EHR' },
      { id: 5, supplyPointMeasuredValueId: 2, value: 42000, label: 'ELR' },
      { id: 6, supplyPointMeasuredValueId: 3, value: 5500, label: 'GAS' },
    ],
  },
  {
    id: 3,
    supplyPointId: 1,
    created: new Date(Date.UTC(2018, 12, 1)),
    dateTaken: new Date(Date.UTC(2018, 12, 1)),
    values: [
      { id: 7, supplyPointMeasuredValueId: 1, value: 24000, label: 'EHR' },
      { id: 8, supplyPointMeasuredValueId: 2, value: 44000, label: 'ELR' },
      { id: 9, supplyPointMeasuredValueId: 3, value: 6000, label: 'GAS' },
    ],
  },
  {
    id: 4,
    supplyPointId: 1,
    created: new Date(Date.UTC(2019, 1, 1)),
    dateTaken: new Date(Date.UTC(2019, 1, 1)),
    values: [
      { id: 10, supplyPointMeasuredValueId: 1, value: 26000, label: 'EHR' },
      { id: 11, supplyPointMeasuredValueId: 2, value: 46000, label: 'ELR' },
      { id: 12, supplyPointMeasuredValueId: 3, value: 6500, label: 'GAS' },
    ],
  },
];

@Injectable()
export class MeasurementsService {

  findAll(supplyPointId: number): MeasurementDto[] {
    const data = measurements.filter(m => m.supplyPointId === supplyPointId);
    return data;
  }

  find(supplyPointId: number, measurementId: number): MeasurementDto {
    const data = measurements.find(m => m.supplyPointId === supplyPointId && m.id === measurementId);
    console.log('DATA', supplyPointId, measurementId, data);
    return data;
  }

  //   create(item: Item) {
  //     this.items.push(item);
  //   }
}
