import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { SupplyPointsController } from './supply-points/supply-points.controller';
import { SupplyPointsService } from './supply-points/supply-points.service';
import { MeasurementsService } from './measurements/measurements.service';
import { SupplyPoint } from './entities/supply-point.entity';
import { SupplyPointMeasuredValue } from './entities/supply-point-measured-value.entity';
import { MeasuredValue } from './entities/measured-value.entity';
import { Measurement } from './entities/measurement.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'energy.sqlite',
      entities: [SupplyPoint, SupplyPointMeasuredValue, Measurement, MeasuredValue],
      logging: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([SupplyPoint, SupplyPointMeasuredValue, Measurement, MeasuredValue]),
  ],
  controllers: [AppController, ItemsController, SupplyPointsController],
  providers: [AppService, ItemsService, SupplyPointsService, MeasurementsService, Measurement, MeasuredValue],
})
export class AppModule {}
