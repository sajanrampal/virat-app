import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Todo } from './todo.schema';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
    constructor(private readonly dataService: TodoService){}

    @Get()
    async getTodos(){
        const todos = await this.dataService.getAllTodos();
        return {
            success: true,
            payload: {
                todos,
            },
        };
    }

    @Get(':id')
    async getTodo(@Param('id') id){
        const todo = await this.dataService.getTodo(id);
        return {
            success: true,
            payload: {
                todo,
            },
        };
    }


    @Post()
    async saveTodo(@Body() user: Todo) {
        const response = await this.dataService.saveTodo(user);
        return {
            success: response,
        };
    }

    @Put(':id')
    async udatetodo(@Body() user: Todo,@Param('id') id) {
        const response = await this.dataService.updateTodo(user,id);
        return {
            success: response,
        };
    }


    @Delete(':id')
    async deleteUser(@Param('id') id){
        const deleteTodo = await this.dataService.deleteTodo(id);
        return {
            success: true,
            payload: {
                deleteTodo,
            },
        };
    }
}
