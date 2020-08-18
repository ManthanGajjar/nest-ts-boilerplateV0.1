import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";
import { MongoUserController } from "./mongoUser.controller";
import { MongoUserService } from "./mongoUser.service";
import { userSchema } from 'src/models/user.schema';

@Module({
  imports: [
    // define which model / table you're going to use for this module
    MongooseModule.forFeature([{ name: 'user', schema: userSchema }])
  ],
  controllers: [MongoUserController],
  providers: [MongoUserService],
  exports: [MongoUserService]
})
export class MongoUserModule {
}
