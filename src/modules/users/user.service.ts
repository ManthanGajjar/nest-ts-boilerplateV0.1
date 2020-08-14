import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user';

@Injectable()
export class UserService {
    public ListOfUsers = [{ id: 1, name: 'manthan', email: 'manthan@gmail.com'}];

    public getUsers = async () => {
        if(this.ListOfUsers.length) {
            return this.ListOfUsers;
        } else {
            throw new NotFoundException('No Users available, please add more ');
        }
    }

    public getUserById = async (id) => {
        console.log(id);
        const user = await this.ListOfUsers.find( (userDetail) => {
            return +userDetail.id === +id;
        });
        return user;
    }

    public deleteUser = async(id) => {
        // removing first user every time for testing
        this.ListOfUsers.splice(0, 1);
        return 'user deleted successfully';
    }

    public addUsers = async (user) => {
        this.ListOfUsers.push(user);
        return this.ListOfUsers;
    }
}
