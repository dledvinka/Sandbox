import {
    Get,
    Post,
    Body,
    Controller,
    UsePipes,
  } from '@nestjs/common';
import { SupplyPointListItemDto } from './supply-point-list-item.dto';
import { SupplyPointsService } from './supply-points.service';
  
  @Controller('supply-points')
  export class SupplyPointsController {
  
    constructor(private readonly supplyPointsService: SupplyPointsService) {}
  
    @Get()
    async findAll(): Promise<SupplyPointListItemDto[]> {
      return this.supplyPointsService.findAll();
    }
  
    // @Post()
    // @UsePipes(new ValidationPipe())
    // async create(@Body() createItemDto: CreateItemDto) {
    //   this.itemsService.create(createItemDto);
    // }
  }