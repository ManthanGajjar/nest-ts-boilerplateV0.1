import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import * as dotEnv from 'dotenv';
dotEnv.config();

@Module({
    controllers: [],
    providers: [],
    imports: [
        MongooseModule.forRoot(process.env.DB_URL, { useNewUrlParser: true })
    ],
    exports: []
})
export class DatabaseModule {

}