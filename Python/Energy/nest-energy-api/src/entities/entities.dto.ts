export interface SupplyPointListItemDto {
  id: number;
  name: string;
}

export interface SupplyPointMeasuredValueDto {
  id: number;
  supplyPointId: number;
  name: string;
  unit: string;
  isRequired: boolean;
}

export interface SupplyPointDetailDto {
  id: number;
  name: string;
  address: string;
  comment: string;
  measuredValues: SupplyPointMeasuredValueDto[];
}

export interface MeasurementDto {
  id: number;
  supplyPointId: number;
  created: Date;
  dateTaken: Date;
  values: MeasuredValueDto[];
}

export interface MeasuredValueDto {
  id: number;
  supplyPointMeasuredValueId: number;
  label: string;
  value: number;
}