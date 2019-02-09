import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { SupplyPointEntity } from './supply-point.entity';
import { MeasuredValue } from 'src/entities/measured-value.entity';

@Entity()
export class SupplyPointMeasuredValue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  unit: string;

  @Column()
  isRequired: boolean;

  @ManyToOne(
    type => SupplyPointEntity,
    supplyPoint => supplyPoint.measuredValues)
  supplyPoint: SupplyPointEntity;

  @OneToMany(
    type => MeasuredValue,
    measuredValue => measuredValue.supplyPointMeasuredValue,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  measuredValues: MeasuredValue[];
}
