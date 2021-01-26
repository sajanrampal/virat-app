import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema'

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Get()
    async getUsers(){
        const users = await this.userService.getAllUser();
        return {
            success: true,
            payload: {
                users,
            },
        };
    }

    @Get(':id')
    async getUser(@Param('id') id){
        const users = await this.userService.getUser(id);
        return {
            success: true,
            payload: {
                users,
            },
        };
    }


    @Post()
    async saveUser(@Body() user: User) {
        const response = await this.userService.saveUser(user);
        return {
            success: response,
        };
    }

    @Delete(':id')
    async deleteUser(@Param('id') id){
        const response = await this.userService.deleteUser(id);
        return {
            success: response,
        };
    }
}
