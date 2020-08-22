import { User } from './../database/entity/user.entity';
import { AddUser } from './dto/userDTO.dto';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor( @InjectRepository(User) private userSchema: Repository<User>) {
        
    }

    async getUsers() {
        // this.userSchema.find({});
        return [];
    }

    async getUserById(id: string) {
        return 'done';
    }

    async addNewUser(user: AddUser) {
        return 'added';
    }

    async deleteUserById(id: string) {
        return 'deleted';
    }
}