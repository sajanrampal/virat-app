import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
    @Prop({type:String,required:true})
    taskName:string;
    @Prop({type:String,required:true})
    assignedTo:string;
    @Prop({type:Number, required:true})
    status:number;
    @Prop({ type: Date, default: () => new Date() })
    createdAt?: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
