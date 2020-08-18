import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class MongoUserService {
    constructor( @InjectModel('user') private readonly userModel: Model) {

    }

    public getUsers = async() => {
       return await this.userModel.find({})
    }

    public getUserById = async(id) => {
        // validation for valid mongoose ID is not implemented yet
        const result = await this.userModel.findById({_id:id});
        if(!result) {
            throw new NotFoundException({msg: 'user not found with this ID '});
        }
        return result;
    }

    public addUsers = async() => {

    }
}
