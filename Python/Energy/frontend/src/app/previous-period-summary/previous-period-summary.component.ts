import { Component, OnInit, Input } from '@angular/core';
import { SupplyPointMeasuredValueDto } from '../entities/supply-point-measured-value-dto';
import { PreviousPeriodSummaryDto } from '../entities/previous-period-summary-dto';

@Component({
  selector: 'app-previous-period-summary',
  templateUrl: './previous-period-summary.component.html',
  styleUrls: ['./previous-period-summary.component.scss']
})
export class PreviousPeriodSummaryComponent implements OnInit {

  @Input() measuredValue: SupplyPointMeasuredValueDto;
  @Input() period: PreviousPeriodSummaryDto;
  
  constructor() { }

  ngOnInit() {
  }

}
