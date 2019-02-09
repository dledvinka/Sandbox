import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { SupplyPointMeasuredValue } from './supply-point-measured-value.entity';
import { Measurement } from './measurement.entity';
import { UserEntity } from 'src/users/user-entity';

@Entity('supply_point')
export class SupplyPointEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  address: string;

  @Column({ length: 100 })
  comment: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column()
  userId: number;

  @ManyToOne(
    type => UserEntity,
    user => user.supplyPoints)
  @JoinColumn({
    name: 'createdById',
  })
  user: UserEntity;

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
