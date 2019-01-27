import {
  Get,
  Post,
  Body,
  Controller,
  UsePipes,
  Param,
} from '@nestjs/common';
import { SupplyPointListItemDto, SupplyPointDetailDto } from '../entities/entities.dto';
import { SupplyPointsService } from './supply-points.service';

@Controller('supply-points')
export class SupplyPointsController {

  constructor(private readonly supplyPointsService: SupplyPointsService) { }

  @Get()
  async findAll(): Promise<SupplyPointListItemDto[]> {
    return this.supplyPointsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<SupplyPointDetailDto> {
    return this.supplyPointsService.find(id);
  }

  // @Post()
  // @UsePipes(new ValidationPipe())
  // async create(@Body() createItemDto: CreateItemDto) {
  //   this.itemsService.create(createItemDto);
  // }
}