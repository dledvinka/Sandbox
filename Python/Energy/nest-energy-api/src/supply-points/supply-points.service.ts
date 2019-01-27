import { Injectable } from '@nestjs/common';
import { SupplyPointListItemDto } from './supply-point-list-item.dto';

const supplyPoints: SupplyPointListItemDto[] = [
    { id: 1, name: 'My place 1' },
    { id: 2, name: 'My place 2' },
    { id: 3, name: 'My place 3...........' },
  ];

@Injectable()
export class SupplyPointsService {
  private readonly supplyPoints: SupplyPointListItemDto[] = supplyPoints;

  findAll(): SupplyPointListItemDto[] {
    return this.supplyPoints;
  }

//   create(item: Item) {
//     this.items.push(item);
//   }
}