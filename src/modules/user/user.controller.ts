import { UserService } from './user.services';
import { AddUser } from './dto/userDTO.dto';
import { Controller, Get, Param, Post, UseFilters, ValidationPipe, UsePipes, Body, Delete } from "@nestjs/common";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('')
    async getUser() {
        const result = await this.userService.getUsers();
        return 'Hello User';
    }

    @Get('/:id')
    async getUserById(@Param('id') id: string ) {
        await this.userService.getUserById(id);
        return 'User By Id => ' + id  ;
    }

    @Post('/')
    @UsePipes(new ValidationPipe())
    async addUser( @Body() user: AddUser ) {
        await this.userService.addNewUser(user)
        return 'adding user';
    }

    @Delete('/:id')
    async deleteUserById( @Param('id') id: string ) {
        await this.userService.deleteUserById(id);
        return 'user deleted ==> ' + id ;
    }
}