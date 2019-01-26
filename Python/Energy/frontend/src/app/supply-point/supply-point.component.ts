import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SupplyPointService } from '../services/supply-point.service';
import { SupplyPointDetailDto } from '../entities/supply-point-detail-dto';
import { NgForm, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { SupplyPointMeasuredValueDto } from '../entities/supply-point-measured-value-dto';

@Component({
  selector: 'app-supply-point',
  templateUrl: './supply-point.component.html',
  styleUrls: ['./supply-point.component.scss']
})
export class SupplyPointComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  id: number;
  model: SupplyPointDetailDto;
  editForm: FormGroup;

  constructor(private supplyPointService: SupplyPointService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    const idParam = this.route.snapshot.paramMap.get('id');
    const idParamValue: number = idParam ? Number(idParam) : undefined;

    if (idParamValue && idParamValue !== 0) {
      this.id = idParamValue;
      this.supplyPointService.get(this.id)
        .subscribe(data => {
          this.model = data;
        });
    } else {
      this.model = new SupplyPointDetailDto();
      this.model.measuredValues = [];
    }

    this.editForm = this.createForm(this.model);
    this.editForm.patchValue(this.model);
  }

  onAddMeasuredValue() : void {
    console.log('onAddMeasuredValue');
    const mv = new SupplyPointMeasuredValueDto();
    mv.supplyPointId = this.id;

    (<FormArray>this.editForm.get('measuredValues')).push(this.createMeasurementControl(mv))
  }

  onSubmit(): void {
    console.log('onSubmit');
    console.log(this.editForm.value);
    console.log(JSON.stringify(this.editForm.value));
    const model: SupplyPointDetailDto = this.editForm.value;

    if (this.id) {
      this.supplyPointService.update(model).subscribe(_ => {
        this.router.navigate(['/supply-points']);
      });
    } else {
      this.supplyPointService.insert(model).subscribe(_ => {
        this.router.navigate(['/supply-points']);
      });
    }
  }

  private createForm(model: SupplyPointDetailDto): FormGroup {
    const form = this.formBuilder.group({
      id: [],
      name: [null, Validators.required],
      address: [],
      comment: [],
      measuredValues: this.formBuilder.array([])
    });

    model.measuredValues.forEach(mv => {
      (<FormArray>form.get('measuredValues')).push(this.createMeasurementControl(mv))
    });

    return form;
  }

  private createMeasurementControl(model: SupplyPointMeasuredValueDto): FormGroup {
    const form = this.formBuilder.group({
      id: [],
      supplyPointId: [],
      name: [null, Validators.required],
      unit: [],
      isRequired: [false]
    });

    return form;
  }
}
