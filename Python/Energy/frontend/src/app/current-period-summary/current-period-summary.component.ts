import { Component, OnInit, Input } from '@angular/core';
import { SupplyPointMeasuredValueDto } from '../entities/supply-point-measured-value-dto';
import { CurrentPeriodSummaryDto } from '../entities/current-period-summary-dto';

@Component({
  selector: 'app-current-period-summary',
  templateUrl: './current-period-summary.component.html',
  styleUrls: ['./current-period-summary.component.scss']
})
export class CurrentPeriodSummaryComponent implements OnInit {

  @Input() measuredValue: SupplyPointMeasuredValueDto;
  @Input() period: CurrentPeriodSummaryDto;
  
  constructor() { }

  ngOnInit() { }

}
