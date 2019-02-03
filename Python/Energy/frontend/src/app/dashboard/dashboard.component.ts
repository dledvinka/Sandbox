import { Component, OnInit } from '@angular/core';
import { SupplyPointService } from '../services/supply-point.service';
import { SupplyPointSummaryDto } from '../entities/supply-point-summary-dto';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  summary$: Observable<SupplyPointSummaryDto>;
  currentFrom: Date;
  currentTo: Date;
  previousFrom: Date;
  previousTo: Date;

  constructor(private readonly supplyPointService: SupplyPointService) { }

  ngOnInit() {
    this.summary$ = this.supplyPointService.getSummary(1).pipe(
      tap(s => console.log(s)),
      tap(s => {
        this.currentFrom = s.summaryFor[0].currentPeriod.from;
        this.currentTo = s.summaryFor[0].currentPeriod.to;
        this.previousFrom = s.summaryFor[0].previousPeriods[s.summaryFor[0].previousPeriods.length - 1].from;
        this.previousTo = s.summaryFor[0].previousPeriods[s.summaryFor[0].previousPeriods.length - 1].to;
      })
    );
  }
}
