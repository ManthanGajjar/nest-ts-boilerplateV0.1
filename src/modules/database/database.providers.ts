import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from './entity/user.entity';
dotenv.config();
const { HOST, PORT, USER, PASSWORD, DATABASE } = process.env;


export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
        type: 'mysql',
        host: HOST,
        port: +PORT,
        username: USER,
        password: PASSWORD,
        database: DATABASE,
        insecureAuth : true,
        entities: [
            './entity/*.ts'
        ],
        synchronize: true,
    }),
  },
];