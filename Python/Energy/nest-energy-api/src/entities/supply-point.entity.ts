import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SupplyPointMeasuredValue } from './supply-point-measured-value.entity';
import { Measurement } from './measurement.entity';

@Entity()
export class SupplyPoint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  address: string;

  @Column({ length: 100 })
  comment: string;

  @OneToMany(
    type => Measurement,
    measurement => measurement.supplyPoint,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  measurements: Measurement[];

  @OneToMany(
    type => SupplyPointMeasuredValue,
    supplyPointMeasuredValue => supplyPointMeasuredValue.supplyPoint,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  measuredValues: SupplyPointMeasuredValue[];
}
