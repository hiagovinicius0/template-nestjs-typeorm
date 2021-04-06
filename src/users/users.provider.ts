import { Connection, Repository } from 'typeorm';
import { Users } from './users.entity';

export const usersProvider = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Users),
    inject: ['DATABASE_CONNECTION'],
  },
];