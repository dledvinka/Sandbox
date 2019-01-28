import { Injectable } from '@nestjs/common';
import { SupplyPointListItemDto, SupplyPointDetailDto, MeasurementDto } from '../entities/entities.dto';

const supplyPoints: SupplyPointListItemDto[] = [
  { id: 1, name: 'My place 1' },
  { id: 2, name: 'My place 2' },
  { id: 3, name: 'My place 3...........' },
];

const supplyPointDetails: SupplyPointDetailDto = {
  id: 1,
  name: 'My place 1',
  address: 'My address 1',
  comment: 'My comment 1',
  measuredValues: [
    {
      id: 1,
      supplyPointId: 1,
      name: 'Electricity high rate',
      unit: 'kWh',
      isRequired: false
    },
    {
      id: 2,
      supplyPointId: 1,
      name: 'Electricity low rate',
      unit: 'kWh',
      isRequired: false
    },
    {
      id: 3,
      supplyPointId: 1,
      name: 'Gas',
      unit: 'm3',
      isRequired: false
    }
  ]
};

@Injectable()
export class SupplyPointsService {
  private readonly supplyPoints: SupplyPointListItemDto[] = supplyPoints;

  findAll(): SupplyPointListItemDto[] {
    return this.supplyPoints;
  }

  find(id: Number): SupplyPointDetailDto {
    return supplyPointDetails;
  }

  //   create(item: Item) {
  //     this.items.push(item);
  //   }
}