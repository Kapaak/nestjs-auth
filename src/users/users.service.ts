import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

//here I would implement database connection

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId:1,
            username:"Pavel",
            password:"pass"
        },
        {
            userId:2,
            username:"Barbora",
            password:"pepe"
        }
    ]

    async findOne(username:string):Promise<UserDto|undefined>{
        return this.users.find(user => user.username === username)
    }
}
