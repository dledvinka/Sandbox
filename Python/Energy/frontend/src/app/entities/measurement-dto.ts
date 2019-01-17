import { MeasuredValueDto } from './measured-value-dto';

export class MeasurementDto {
  id: number;
  supplyPointId: number;
  created: Date;
  dateTaken: Date;
  values: MeasuredValueDto[];
}
