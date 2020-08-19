import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
export class AddUser {

    @IsNotEmpty()
    @IsString()
    public id: string;

    @IsNotEmpty()
    @IsString()
    public userName: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    public email: string;   
}