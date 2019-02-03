import { PeriodComparisonDto } from './period-comparison-dto';

export class CurrentPeriodSummaryDto {
    from: Date;
    to: Date;
    estimateToDate: number;
    estimateToDateComparison: PeriodComparisonDto;
    estimateEndOfPeriod: number;
    estimateEndOfPeriodComparison: PeriodComparisonDto;
    realMeasurementsCount: number;
}
