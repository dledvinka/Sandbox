import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { SupplyPointsController } from './supply-points/supply-points.controller';
import { SupplyPointsService } from './supply-points/supply-points.service';

@Module({
  imports: [],
  controllers: [AppController, ItemsController, SupplyPointsController],
  providers: [AppService, ItemsService, SupplyPointsService],
})
export class AppModule {}
