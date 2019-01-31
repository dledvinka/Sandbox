import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { SupplyPoint } from './supply-point.entity';

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
    type => SupplyPoint,
    supplyPoint => supplyPoint.measuredValues)
  supplyPoint: SupplyPoint;
}
