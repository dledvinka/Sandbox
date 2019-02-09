import { Entity, PrimaryGeneratedColumn, Column, Unique, BeforeInsert, CreateDateColumn, OneToMany } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserRO } from './user-ro';
import { SupplyPointEntity } from 'src/entities/supply-point.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created: Date;

  @Column('text', {
    unique: true,
  })
  username: string;

  @Column('text')
  password: string;

  @OneToMany(
    type => SupplyPointEntity,
    sp => sp.user)
  supplyPoints: SupplyPointEntity[];

  @BeforeInsert()
  async onBeforeInsert() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  toResponseObject(showToken: boolean = false): UserRO {
    const { id, created, username, token } = this;
    const responseObject: UserRO = { id, created, username };
    if (showToken) {
      responseObject.token = token;
    }
    return responseObject;
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }

  private get token() {
    const { id, username } = this;
    return jwt.sign({ id, username }, 'process.env.SECRET', { expiresIn: '7d' });
  }
}
