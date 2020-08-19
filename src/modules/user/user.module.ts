import { UserService } from './user.services';
import { UserController } from './user.controller';
import { Controller, Module } from "@nestjs/common";

@Module({
    imports: [],
    controllers: [UserController],
    exports: [],
    providers: [UserService]
})
export class UserModule {

}