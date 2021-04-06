import { createConnection } from 'typeorm';

export const databaseProviders = [{
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
        type: 'postgres',
        host: 'queenie.db.elephantsql.com',
        port: 5432,
        username: 'hsivnujk',
        password: 'MQPYJtHEERC5yD8Q1dkFlzFRpL_Yn6K_',
        database: 'hsivnujk',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];