import { Controller, Post, Get, Body, Param, Delete, } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user';

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
  async addUser(@Body() user: any ) {
    return await this.userService.addUsers(user);
  }

  @Delete('/:userId')
  async deleteUser(@Param('userId') userId: string) {
    console.log(`Delete user params ===> ${userId}`);
    return await this.userService.deleteUser(userId);;
  }
}
