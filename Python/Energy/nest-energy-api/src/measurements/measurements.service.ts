import { Injectable } from '@nestjs/common';
import { MeasurementDto } from 'src/entities/entities.dto';
import { Measurement } from 'src/entities/measurement.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

const measurements: MeasurementDto[] = [
  {
    id: 1,
    supplyPointId: 1,
    created: new Date(Date.UTC(2018, 10, 1)),
    dateTaken: new Date(Date.UTC(2018, 10, 1)),
    values: [
      { id: 1, supplyPointMeasuredValueId: 1, value: 20000, label: 'EHR' },
      { id: 2, supplyPointMeasuredValueId: 2, value: 40000, label: 'ELR' },
      { id: 3, supplyPointMeasuredValueId: 3, value: 5000, label: 'GAS' },
    ],
  },
  {
    id: 2,
    supplyPointId: 1,
    created: new Date(Date.UTC(2018, 11, 1)),
    dateTaken: new Date(Date.UTC(2018, 11, 1)),
    values: [
      { id: 4, supplyPointMeasuredValueId: 1, value: 22000, label: 'EHR' },
      { id: 5, supplyPointMeasuredValueId: 2, value: 42000, label: 'ELR' },
      { id: 6, supplyPointMeasuredValueId: 3, value: 5500, label: 'GAS' },
    ],
  },
  {
    id: 3,
    supplyPointId: 1,
    created: new Date(Date.UTC(2018, 12, 1)),
    dateTaken: new Date(Date.UTC(2018, 12, 1)),
    values: [
      { id: 7, supplyPointMeasuredValueId: 1, value: 24000, label: 'EHR' },
      { id: 8, supplyPointMeasuredValueId: 2, value: 44000, label: 'ELR' },
      { id: 9, supplyPointMeasuredValueId: 3, value: 6000, label: 'GAS' },
    ],
  },
  {
    id: 4,
    supplyPointId: 1,
    created: new Date(Date.UTC(2019, 1, 1)),
    dateTaken: new Date(Date.UTC(2019, 1, 1)),
    values: [
      { id: 10, supplyPointMeasuredValueId: 1, value: 26000, label: 'EHR' },
      { id: 11, supplyPointMeasuredValueId: 2, value: 46000, label: 'ELR' },
      { id: 12, supplyPointMeasuredValueId: 3, value: 6500, label: 'GAS' },
    ],
  },
];

@Injectable()
export class MeasurementsService {

  constructor(
    @InjectRepository(Measurement) private readonly measurementRepository: Repository<Measurement>) {
  }

  async findAll(supplyPointId: number): Promise<Measurement[]> {
    return await this.measurementRepository.find({ supplyPointId });

    // return await this.measurementRepository
    //   .createQueryBuilder()
    //   .select('m')
    //   .from(Measurement, 'm')
    //   .where('m.supplyPointId = :id', { id: supplyPointId })
    //   .getMany();
  }

  async find(measurementId: number): Promise<Measurement> {
    return await this.measurementRepository.findOne(measurementId);
  }

  async create(supplyPointId: number, measurement: Measurement): Promise<Measurement> {
    return this.measurementRepository.save(measurement);
  }

  async update(measurement: Measurement): Promise<Measurement> {
    return await this.measurementRepository.save(measurement);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.measurementRepository.delete(id);
  }
}
