

import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MeasuredValueDto } from '../entities/measured-value-dto';
import { SupplyPointMeasuredValueDto } from '../entities/supply-point-measured-value-dto';
import { MeasurementDto } from '../entities/measurement-dto';

@Injectable({
  providedIn: 'root'
})
export class MeasureValueControlService {
  constructor() { }

  toFormGroup(measurement: MeasurementDto, measuredValues: SupplyPointMeasuredValueDto[] ) {
    const group: any = {};
    const valuesGroup: any = {};

    group['dateTaken'] = new FormControl(measurement.dateTaken.toISOString().substring(0, 10), Validators.required);
    group['values'] = new FormGroup(valuesGroup);

    measurement.values.forEach(value => {
      const definition = measuredValues.find(mv => mv.id === value.supplyPointMeasuredValueId);
      const label = `{definition.name} {definition.measuredValueName} [{definition.unitName}]`;
      valuesGroup[value.label] = definition.isRequired ? new FormControl(value.value, Validators.required)
                                              : new FormControl(value.value);
    });
    console.log(group);
    return new FormGroup(group);
  }
}
