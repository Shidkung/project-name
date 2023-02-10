import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    name: 'name',
    nullable: false,
    default: '',
  })
  name: string;
  @Column({
    name: 'surname',
    nullable: false,
    default: '',
  })
  surname: string;
  @Column({
    name: 'phone_number',
    nullable: false,
    default: '',
  })
  phone: string;

  @Column({
    name:'github',
    nullable: false,
    default: '',
  })
  github: string;

  @Column({
    name:'email',
    nullable: false,
    default: '',
  })
  email: string;
}
