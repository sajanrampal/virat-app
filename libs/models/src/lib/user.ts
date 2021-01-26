import {Iuser} from '@virat-app/interface';
// import {} from '@nestjs/swagger';
export class User extends Iuser{
    _id?:string;
    email:string;
    userName:string;
    firstName:string;
    lastName:string;
    password:string;
}