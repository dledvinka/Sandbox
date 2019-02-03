import { PeriodComparisonDto } from './period-comparison-dto';

export class PreviousPeriodSummaryDto {
    from: Date;
    to: Date;
    periodConsumption: number;
    shortTimeSamePeriodConsumption: number;
    shortTimeSamePeriodComparison: PeriodComparisonDto;
    longTimeSamePeriodConsumption: number;
    longTimeSamePeriodComparison: PeriodComparisonDto;
}
