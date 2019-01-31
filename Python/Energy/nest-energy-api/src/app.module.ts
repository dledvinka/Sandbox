import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { SupplyPointsController } from './supply-points/supply-points.controller';
import { SupplyPointsService } from './supply-points/supply-points.service';
import { MeasurementsService } from './measurements/measurements.service';
import { SupplyPoint } from './supply-points/supply-point.entity';
import { SupplyPointMeasuredValue } from './supply-points/supply-point-measured-value.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'energy.sqlite',
      entities: [SupplyPoint, SupplyPointMeasuredValue],
      logging: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([SupplyPoint, SupplyPointMeasuredValue]),
  ],
  controllers: [AppController, ItemsController, SupplyPointsController],
  providers: [AppService, ItemsService, SupplyPointsService, MeasurementsService],
})
export class AppModule {}
