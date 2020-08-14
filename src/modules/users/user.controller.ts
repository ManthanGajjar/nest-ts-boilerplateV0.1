import { Controller, Post, Get, Body, Param, Delete, UsePipes, ValidationPipe, Query, Req, Headers, HttpCode, Res, } from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';
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
  async getById(
  @Param('id') id: string ,
  // @Query('query1') query: string
  )
  {
    const userDetail = await this.userService.getUserById(id);
    return userDetail;
  }

  @HttpCode(201)
  // to send specific http code => HttpCode
  @Post()
  @UsePipes(new ValidationPipe())
  async addUser(@Body() user: AddUserDto, @Req() req: Request, @Res() res: Response ) {
    // to get access of req => @Req() req: Request ( same for response )
    // to access header => @Headers() header: any
    // console.log(req.body);
    await this.userService.addUsers(user);
    return res.status(200).json({ msg: 'user Created successfully '});
  }

  @Delete('/:userId')
  async deleteUser(@Param('userId') userId: string) {
    console.log(`Delete user params ===> ${userId}`);
    return await this.userService.deleteUser(userId);;
  }
}
