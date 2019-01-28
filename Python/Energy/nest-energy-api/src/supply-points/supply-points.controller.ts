import {
  Get,
  Post,
  Body,
  Controller,
  UsePipes,
  Param,
} from '@nestjs/common';
import { SupplyPointListItemDto, SupplyPointDetailDto, MeasurementDto } from '../entities/entities.dto';
import { SupplyPointsService } from './supply-points.service';
import { MeasurementsService } from 'src/measurements/measurements.service';

@Controller('supply-points')
export class SupplyPointsController {

  constructor(
    private readonly supplyPointsService: SupplyPointsService,
    private readonly measurementsService: MeasurementsService) { }

  @Get()
  async getAllSupplyPoints(): Promise<SupplyPointListItemDto[]> {
    return this.supplyPointsService.findAll();
  }

  @Get(':id')
  async getSupplyPoint(@Param('id') id): Promise<SupplyPointDetailDto> {
    return this.supplyPointsService.find(Number(id));
  }

  @Get(':supplyPointId/measurements')
  async getAllMeasurements(@Param('supplyPointId') supplyPointId): Promise<MeasurementDto[]> {
    return this.measurementsService.findAll(Number(supplyPointId));
  }

  @Get(':supplyPointId/measurements/:measurementId')
  async getMeasurement(@Param('supplyPointId') supplyPointId, @Param('measurementId') measurementId): Promise<MeasurementDto> {
    return this.measurementsService.find(Number(supplyPointId), Number(measurementId));
  }

  // @Post()
  // @UsePipes(new ValidationPipe())
  // async create(@Body() createItemDto: CreateItemDto) {
  //   this.itemsService.create(createItemDto);
  // }
}
