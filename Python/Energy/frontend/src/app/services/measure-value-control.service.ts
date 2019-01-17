

import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MeasuredValueDto } from '../entities/measured-value-dto';
import { SupplyPointMeasuredValueDto } from '../entities/supply-point-measured-value-dto';

@Injectable()
export class MeasureValueControlService {
  constructor() { }

  toFormGroup(values: MeasuredValueDto[], measuredValues: SupplyPointMeasuredValueDto[] ) {
    const group: any = {};

    values.forEach(value => {
      const definition = measuredValues.find(mv => mv.id === value.supplyPointMeasuredValueId);
      const label = `{definition.name} {definition.measuredValueName} [{definition.unitName}]`;
      group[value.supplyPointMeasuredValueId] = definition.isRequired ? new FormControl(label, Validators.required)
                                              : new FormControl(label);
    });
    return new FormGroup(group);
  }
}
