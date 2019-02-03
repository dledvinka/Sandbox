import { CurrentPeriodSummaryDto } from './current-period-summary-dto';
import { PreviousPeriodSummaryDto } from './previous-period-summary-dto';
import { SupplyPointMeasuredValueDto } from './supply-point-measured-value-dto';

export class SupplyPointSummaryDto {
    supplyPointId: number;
    summaryFor: {
        measuredValue: SupplyPointMeasuredValueDto;
        currentPeriod: CurrentPeriodSummaryDto;
        previousPeriods: PreviousPeriodSummaryDto[];
    }[];
    
}
