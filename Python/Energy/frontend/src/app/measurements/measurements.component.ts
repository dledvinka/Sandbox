import { Component, OnInit } from '@angular/core';
import { MeasurementService } from '../services/measurement.service';
import { Measurement } from '../entities/measurement';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {

  constructor(
    private measurementsService: MeasurementService,
    private router: Router,
    private route: ActivatedRoute) { }

  measurements$: Observable<Measurement[]>;

  ngOnInit() {
    const supplyPointIdParam = this.route.snapshot.paramMap.get('id');
    this.measurements$ = this.measurementsService.getAll();
  }

  onDelete(id: Number): void {
    this.measurementsService.get(id).subscribe((data: Measurement) => {
      const msg = 'Are you sure to delete measurement related to ' + data.date_taken.toString() + '?';
      if (confirm(msg)) {
        this.measurementsService.delete(id).subscribe(_ => {
          this.router.navigate(['/measurements']);
        });
      }
    });
  }
}
