import { Controller, Get, Param } from "@nestjs/common";
import { MongoUserService } from "./mongoUser.service";

// default route will be user
@Controller('mongo')
export class MongoUserController {
  constructor(private userService: MongoUserService ) {}

  @Get('/')
  async getMongoUser() {
    const result = await this.userService.getUsers();
    return result;
  }

  @Get('/:id')
  async getUserById( @Param('id') id: string ) {
    const result = await this.userService.getUserById(id);
    return result;
  }

}
