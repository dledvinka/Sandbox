import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormArray } from '@angular/forms';
import { MeasurementDto } from '../entities/measurement-dto';
import { MeasurementService } from '../services/measurement.service';
import { CommandResult } from '../entities/command-result';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SupplyPointService } from '../services/supply-point.service';
import { MeasureValueControlService } from '../services/measure-value-control.service';
import { Observable, zip, combineLatest } from 'rxjs';
import { SupplyPointDetailDto } from '../entities/supply-point-detail-dto';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.scss']
})
export class MeasurementComponent implements OnInit {

  form: FormGroup;
  payLoad = '';
  model: MeasurementDto;
  private supplyPointId: number;
  private supplyPoint: SupplyPointDetailDto;
  private measurementId: number;

  constructor(
    private measurementService: MeasurementService,
    private supplyPointService: SupplyPointService,
    private mvcs: MeasureValueControlService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    const idParam = this.route.snapshot.paramMap.get('id');
    const midParam = this.route.snapshot.paramMap.get('mid');
    this.supplyPointId = Number(idParam);
    this.measurementId = midParam ? Number(midParam) : undefined;

    const getSupplyPoint$ = this.supplyPointService.get(this.supplyPointId);
    const getMeasurement$ = this.measurementService.get(this.measurementId);
    console.log('here', this.supplyPointId, this.measurementId);

    combineLatest([getSupplyPoint$, getMeasurement$],
      (supplyPoint: SupplyPointDetailDto, measurement: MeasurementDto) => ({ supplyPoint, measurement }))
      .subscribe(data => {
        console.log('zip result', data);
        this.supplyPoint = data.supplyPoint;

        if (data.measurement) {
          this.model = data.measurement;
        } else {
          this.model = new MeasurementDto();
          this.model.supplyPointId = this.supplyPointId;
          this.model.values = [];

          this.supplyPoint.measuredValues.forEach(mv => {
            this.model.values.push({ id: undefined, supplyPointMeasuredValueId: mv.id, label: mv.name, value: undefined });
          });
        }

        this.form = this.mvcs.toFormGroup(this.model, this.supplyPoint.measuredValues);
      });
  }

  onSubmit(): void {
    this.model.dateTaken = new Date(this.form.value['dateTaken']);

    this.model.values.forEach((mv, index) => {
      this.model.values[index].value = Number((<FormArray>this.form.get('values')).value[index]);
    });

    console.log('form values (json)', JSON.stringify(this.form.value));
    console.log('model values (json) ',  JSON.stringify(this.model));

    if (this.measurementId) {
      this.measurementService.update(this.model).subscribe(_ => {
        this.router.navigate([`/supply-point/{this.supplyPointId}/measurements`]);
      });
    } else {
      this.measurementService.insert(this.model).subscribe(_ => {
        this.router.navigate([`/supply-point/{this.supplyPointId}/measurements`]);
      });
    }
  }
}
