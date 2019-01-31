import { Injectable } from '@nestjs/common';
import { Repository, DeleteResult, Connection } from 'typeorm';
import { SupplyPoint } from '../entities/supply-point.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SupplyPointsService {

  constructor(
    @InjectRepository(SupplyPoint) private readonly supplyPointRepository: Repository<SupplyPoint>) {
  }

  async findAll(): Promise<SupplyPoint[]> {
    return await this.supplyPointRepository.find();
  }

  async find(id: number): Promise<SupplyPoint> {
    return await this.supplyPointRepository.findOne(id, { relations: ['measuredValues'] });
  }

  async create(supplyPoint: SupplyPoint): Promise<SupplyPoint> {
    return this.supplyPointRepository.save(supplyPoint);
  }

  async update(supplyPoint: SupplyPoint): Promise<SupplyPoint> {
    return await this.supplyPointRepository.save(supplyPoint);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.supplyPointRepository.delete(id);
  }
}
