import {
  Get,
  Post,
  Body,
  Controller,
  UsePipes,
  Param,
  ValidationPipe,
  Logger,
  Put,
  Delete,
} from '@nestjs/common';
import { SupplyPointListItemDto, SupplyPointDetailDto, MeasurementDto } from '../entities/entities.dto';
import { SupplyPointsService } from './supply-points.service';
import { MeasurementsService } from 'src/measurements/measurements.service';
import { SupplyPoint } from '../entities/supply-point.entity';
import { Measurement } from 'src/entities/measurement.entity';

@Controller('supply-points')
export class SupplyPointsController {

  constructor(
    private readonly supplyPointsService: SupplyPointsService,
    private readonly measurementsService: MeasurementsService) { }

  @Get()
  async getAllSupplyPoints(): Promise<SupplyPoint[]> {
    return this.supplyPointsService.findAll();
  }

  @Get(':id')
  async getSupplyPoint(@Param('id') id): Promise<SupplyPoint> {
    return this.supplyPointsService.find(Number(id));
  }

  @Get(':supplyPointId/measurements')
  async getAllMeasurements(@Param('supplyPointId') supplyPointId): Promise<Measurement[]> {
    return this.measurementsService.findAll(Number(supplyPointId));
  }

  @Get(':supplyPointId/measurements/:measurementId')
  async getMeasurement(@Param('supplyPointId') supplyPointId, @Param('measurementId') measurementId): Promise<Measurement> {
    return this.measurementsService.find(Number(measurementId));
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() supplyPoint: SupplyPoint): Promise<SupplyPoint> {
    return this.supplyPointsService.create(supplyPoint);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id, @Body() supplyPoint: SupplyPoint): Promise<SupplyPoint> {
    return this.supplyPointsService.update(supplyPoint);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.supplyPointsService.delete(id);
  }

  @Post(':supplyPointId/measurements')
  @UsePipes(new ValidationPipe())
  async createMeasurement(@Param('supplyPointId') supplyPointId, @Body() measurement: Measurement): Promise<Measurement> {
    return this.measurementsService.create(supplyPointId, measurement);
  }

  @Put(':id/measurements/:mid')
  @UsePipes(new ValidationPipe())
  async updateMeasurement(@Param('id') supplyPointId, @Param('mid') measurementId, @Body() measurement: Measurement): Promise<Measurement> {
    return this.measurementsService.update(measurement);
  }

  @Delete(':id/measurements/:mid')
  removeMeasurement(@Param('id') supplyPointId, @Param('mid') measurementId) {
    return this.measurementsService.delete(measurementId);
  }

  // @Post()
  // async create2(@Body() item: string) {
  //   Logger.log(item, 'SupplyPointsController.create');
  // }
}
