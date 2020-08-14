import { IsNotEmpty, IsString, IsNumber, IsPositive, IsEmail } from 'class-validator';

export class AddUserDto {

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    id: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
    
}