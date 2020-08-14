import { Controller, Post, Get, Body, Param, Delete, UsePipes, ValidationPipe, } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user';
import { AddUserDto } from './dto/user.dto';
// default route will be user
@Controller('user')
export class UserController {
  constructor(private userService: UserService ) {}

  @Get()
  async getUsers() {
    const users = await this.userService.getUsers();
    return users;
  }

  @Get('/:id')
  async getById(@Param('id') id: string ) {
    const userDetail = await this.userService.getUserById(id);
    return userDetail;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async addUser(@Body() user: AddUserDto ) {
    return await this.userService.addUsers(user);
  }

  @Delete('/:userId')
  async deleteUser(@Param('userId') userId: string) {
    console.log(`Delete user params ===> ${userId}`);
    return await this.userService.deleteUser(userId);;
  }
}
