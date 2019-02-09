import { UserRO } from 'src/users/user-ro';
import { Measurement } from './measurement.entity';
import { SupplyPointMeasuredValue } from './supply-point-measured-value.entity';

export class SupplyPointRO {
  id: number;
    name: string;
    address: string;
    comment: string;
    created: Date;
    updated: Date;
    user: UserRO;
    measurements: Measurement[];
    measuredValues: SupplyPointMeasuredValue[];
}
