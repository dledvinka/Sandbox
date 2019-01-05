import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Measurement } from '../entities/measurement';
import { MeasurementService } from '../services/measurement.service';
import { CommandResult } from '../entities/command-result';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.scss']
})
export class MeasurementComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  model: Measurement;
  private id: Number;

  constructor(
    private measurementService: MeasurementService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.id = Number(idParam);
      this.measurementService.get(this.id)
        .subscribe(data => {
          this.model = data;
        });
    } else {
      this.model = new Measurement();
    }
  }

  onSubmit(): void {
    this.model.date_taken = this.form.value['dateTaken'];
    this.model.electricity_high_rate_kwh = this.form.value['eleHighRate'];
    this.model.electricity_low_rate_kwh = this.form.value['eleLowRate'];
    this.model.gas_m3 = this.form.value['gas'];

    console.log(this.model);

    if (this.id) {
      this.measurementService.update(this.model).subscribe(_ => {
        this.router.navigate(['/measurements']);
      });
    } else {
      this.measurementService.insert(this.model).subscribe(_ => {
        this.router.navigate(['/measurements']);
      });
    }
  }
}
