import { SupplyPointMeasuredValueDto } from './supply-point-measured-value-dto';

export class SupplyPointDetailDto {
  id: number;
  name: string;
  address: string;
  comment: string;
  measuredValues: SupplyPointMeasuredValueDto[];
}
