/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import { Todo, TodoDocument } from './todo.schema';

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>){}

    getAllTodos():Promise<Todo[]>{
        return this.todoModel.find().exec();
    }

    getTodo(id:string){
        return this.todoModel.findOne({_id:id})
    }

    saveTodo(todo:Todo):Promise<Todo>{
        try {
            const createdUser = new this.todoModel(todo);
            return createdUser.save();
        } catch (error) {
            console.log(error);
            throw new HttpException(
                {
                    success: false,
                    message: error.message,
                    error,
                },
                400
            );
        }
    }

    updateTodo(todo:any,id:any){
        try {
            return this.todoModel.findByIdAndUpdate(id,todo,{new:true})
            // const createdUser = new this.todoModel(todo);
            // return createdUser.updateOne({_id:id},todo)
        } catch (error) {
            console.log(error);
            throw new HttpException(
                {
                    success: false,
                    message: error.message,
                    error,
                },
                400
            );
        }
    }

    deleteTodo(id:string){
        return this.todoModel.findByIdAndDelete(id);
    }
}
