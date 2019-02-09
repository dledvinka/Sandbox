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
  UseGuards,
} from '@nestjs/common';
import { SupplyPointListItemDto, SupplyPointDetailDto, MeasurementDto } from '../entities/entities.dto';
import { SupplyPointsService } from './supply-points.service';
import { MeasurementsService } from 'src/measurements/measurements.service';
import { SupplyPointEntity } from '../entities/supply-point.entity';
import { Measurement } from 'src/entities/measurement.entity';
import { AuthGuard } from 'src/shared/auth.guard';
import { User } from 'src/users/user.decorator';
import { UsersService } from 'src/users/users.service';
import { SupplyPointRO } from 'src/entities/supply-point.ro';

@Controller('api/supply-points')
export class SupplyPointsController {

  constructor(
    private readonly supplyPointsService: SupplyPointsService,
    private readonly measurementsService: MeasurementsService) { }

  @Get()
  @UseGuards(new AuthGuard())
  async getAllSupplyPoints(@User('id') userId: number): Promise<SupplyPointRO[]> {
    return this.supplyPointsService.findAll(userId);
  }

  @Get(':id')
  async getSupplyPoint(@User('id') userId: number, @Param('id') id): Promise<SupplyPointRO> {
    return this.supplyPointsService.find(userId, Number(id));
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
  async create(@User('id') userId: number, @Body() supplyPoint: SupplyPointEntity): Promise<SupplyPointRO> {
    return this.supplyPointsService.create(userId, supplyPoint);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@User('id') userId: number, @Param('id') id, @Body() supplyPoint: SupplyPointEntity): Promise<SupplyPointRO> {
    return this.supplyPointsService.update(userId, supplyPoint);
  }

  @Delete(':id')
  remove(@User('id') userId: number, @Param('id') id) {
    return this.supplyPointsService.delete(userId, id);
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
