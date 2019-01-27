export interface SupplyPointListItemDto {
  id: number;
  name: string;
}

export interface SupplyPointMeasuredValueDto {
  id: number;
  supplyPointId: number;
  name: string;
  unit: string;
  isRequired: Boolean;
}

export interface SupplyPointDetailDto {
  id: number;
  name: string;
  address: string;
  comment: string;
  measuredValues: SupplyPointMeasuredValueDto[];
}