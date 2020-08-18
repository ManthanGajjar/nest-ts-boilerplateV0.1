import { MongoUserModule } from './modules/mongo/mongoUser.module';
import { DatabaseModule } from './modules/database/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [ UserModule, DatabaseModule, MongoUserModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
