import { PrimaryGeneratedColumn, Column, ManyToOne, Entity, JoinColumn } from 'typeorm';
import { Measurement } from './measurement.entity';
import { SupplyPointMeasuredValue } from 'src/entities/supply-point-measured-value.entity';

@Entity()
export class MeasuredValue {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  value: number;
  @Column({ nullable: false })
  supplyPointMeasuredValueId: number;

  @ManyToOne(
    type => Measurement,
    measurement => measurement.values,
    { onDelete: 'CASCADE' })
  measurement: Measurement;

  @ManyToOne(
    type => SupplyPointMeasuredValue,
    supplyPointMeasuredValue => supplyPointMeasuredValue.measuredValues)
  @JoinColumn({
    name: 'supplyPointMeasuredValueId',
  })
  supplyPointMeasuredValue: SupplyPointMeasuredValue;
}
