import { Component, OnInit } from '@angular/core';
import { MeasurementsService } from './measurements.service';
import { Measurement } from '../entities/measurement';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {

  constructor(private measurementsService: MeasurementsService) { }

  measurements$: Observable<Measurement[]>;

  ngOnInit() {
    this.measurements$ = this.measurementsService.get_all();
  }

}
