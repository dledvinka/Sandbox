import { Component, OnInit } from '@angular/core';
import { MeasurementService } from '../services/measurement.service';
import { Measurement } from '../entities/measurement';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {

  constructor(private measurementsService: MeasurementService) { }

  measurements$: Observable<Measurement[]>;

  ngOnInit() {
    this.measurements$ = this.measurementsService.get_all().pipe(
      tap((data: Measurement[]) => { console.log(data); })
    );
  }
}
