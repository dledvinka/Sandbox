import { Component, OnInit } from '@angular/core';
import { MeasurementService } from '../services/measurement.service';
import { MeasurementDto } from '../entities/measurement-dto';
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

  supplyPointId: number;

  constructor(
    private measurementsService: MeasurementService,
    private router: Router,
    private route: ActivatedRoute) { }

  measurements$: Observable<MeasurementDto[]>;

  ngOnInit() {
    const supplyPointIdParam = this.route.snapshot.paramMap.get('id');
    this.supplyPointId = Number(supplyPointIdParam);
    this.measurements$ = this.measurementsService.getAll(this.supplyPointId);
  }

  onDelete(model: MeasurementDto): void {
    // this.measurementsService.get(this.supplyPointId, id).subscribe((data: MeasurementDto) => {
    //   const msg = 'Are you sure to delete measurement related to ' + data.dateTaken.toLocaleDateString() + '?';
    //   if (confirm(msg)) {
    //     this.measurementsService.delete(id).subscribe(_ => {
    //       this.router.navigate([`/supply-point/{this.supplyPointId}/measurements`]);
    //     });
    //   }
    // });

    this.measurementsService.delete(model).subscribe(_ => {
      this.router.navigate([`/supply-points/${this.supplyPointId}/measurements`]);
    });
  }
}
