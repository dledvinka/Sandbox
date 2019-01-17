import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MeasurementDto } from '../entities/measurement-dto';
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
  model: MeasurementDto;
  private supplyPointId: number;
  private measurementId: number;

  constructor(
    private measurementService: MeasurementService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    const idParam = this.route.snapshot.paramMap.get('id');
    const midParam = this.route.snapshot.paramMap.get('mid');
    this.supplyPointId = Number(idParam);
    this.measurementId = midParam ? Number(midParam) : undefined;

    if (this.measurementId && this.measurementId !== 0) {
      this.measurementService.get(this.measurementId)
        .subscribe(data => {
          this.model = data;
        });
    } else {
      this.model = new MeasurementDto();
      this.model.supplyPointId = this.supplyPointId;
    }
  }

  onSubmit(): void {
    // this.model.date_taken = this.form.value['dateTaken'];
    // this.model.electricity_high_rate_kwh = this.form.value['eleHighRate'];
    // this.model.electricity_low_rate_kwh = this.form.value['eleLowRate'];
    // this.model.gas_m3 = this.form.value['gas'];

    // console.log(this.model);

    // if (this.id) {
    //   this.measurementService.update(this.model).subscribe(_ => {
    //     this.router.navigate(['/measurements']);
    //   });
    // } else {
    //   this.measurementService.insert(this.model).subscribe(_ => {
    //     this.router.navigate(['/measurements']);
    //   });
    // }
  }
}
