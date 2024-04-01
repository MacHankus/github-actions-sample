import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClientModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  surname: string;
}
