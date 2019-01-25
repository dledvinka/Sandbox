import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

import { MeasuredValueDto } from '../entities/measured-value-dto';
import { SupplyPointMeasuredValueDto } from '../entities/supply-point-measured-value-dto';
import { MeasurementDto } from '../entities/measurement-dto';

@Injectable({
  providedIn: 'root'
})
export class MeasureValueControlService {
  constructor(private formBuilder: FormBuilder) { }

  toFormGroup(measurement: MeasurementDto, measuredValues: SupplyPointMeasuredValueDto[] ) {
    const dateTaken = measurement.dateTaken || new Date();
    const form = new FormGroup({
      'dateTaken': new FormControl(dateTaken.toISOString().substr(0, 10), Validators.required),
      'values': new FormArray([])
    });

    measurement.values.forEach(value => {
      const definition = measuredValues.find(mv => mv.id === value.supplyPointMeasuredValueId);
      const control = definition.isRequired ? new FormControl(value.value, Validators.required) : new FormControl(value.value);
      (<FormArray>form.get('values')).push(control);
    });

    return form;
  }
}
