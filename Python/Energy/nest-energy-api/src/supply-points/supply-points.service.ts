import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository, DeleteResult, Connection } from 'typeorm';
import { SupplyPointEntity } from '../entities/supply-point.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/user-entity';
import { SupplyPointRO } from 'src/entities/supply-point.ro';

@Injectable()
export class SupplyPointsService {

  constructor(
    @InjectRepository(SupplyPointEntity) private readonly supplyPointRepository: Repository<SupplyPointEntity>,
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {
  }

  async findAll(userId: number): Promise<SupplyPointRO[]> {
    const sps = await this.supplyPointRepository.find({ where: { userId }, relations: ['user'] });
    console.log(JSON.stringify(sps));
    return sps.map(sp => this.toResponseObject(sp));
  }

  async find(userId: number, id: number): Promise<SupplyPointRO> {
    const sp = await this.supplyPointRepository.findOne(id, { relations: ['measuredValues'] });
    return this.toResponseObject(sp);
  }

  async create(userId: number, supplyPoint: SupplyPointEntity): Promise<SupplyPointRO> {
    const user = await this.userRepository.findOne(userId);
    const sp = await this.supplyPointRepository.save({ ...supplyPoint, userId });
    return this.toResponseObject(sp);
  }

  async update(userId: number, supplyPoint: SupplyPointEntity): Promise<SupplyPointRO> {
    let sp = await this.supplyPointRepository.findOne(supplyPoint.id);
    if (!sp) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    this.ensureOwnership(sp, userId);
    sp = await this.supplyPointRepository.save(supplyPoint);
    return this.toResponseObject(sp);
  }

  async delete(userId: number, id: number): Promise<DeleteResult> {
    const sp = await this.supplyPointRepository.findOne(id);
    if (!sp) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    this.ensureOwnership(sp, userId);
    return await this.supplyPointRepository.delete(id);
  }

  private toResponseObject(supplyPoint: SupplyPointEntity): SupplyPointRO {
    return { ...supplyPoint, user: supplyPoint.user.toResponseObject() };
  }

  private ensureOwnership(supplyPoint: SupplyPointEntity, userId: number): void {
    if (supplyPoint.userId !== userId) {
      throw new HttpException('Invalid user', HttpStatus.UNAUTHORIZED);
    }
  }
}
