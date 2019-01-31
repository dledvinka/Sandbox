import { ManyToOne, CreateDateColumn, PrimaryGeneratedColumn, Column, OneToMany, Entity, JoinColumn } from 'typeorm';
import { SupplyPoint } from 'src/entities/supply-point.entity';
import { MeasuredValue } from './measured-value.entity';

@Entity()
export class Measurement {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  created: Date;
  @Column('date')
  dateTaken: Date;
  @Column({ nullable: false })
  supplyPointId: number;

  @ManyToOne(
    type => SupplyPoint,
    supplyPoint => supplyPoint.measurements)
  @JoinColumn({
    name: 'supplyPointId',
  })
  supplyPoint: SupplyPoint;

  @OneToMany(
    type => MeasuredValue,
    measuredValue => measuredValue.measurement,
    { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true })
  values: MeasuredValue[];
}
