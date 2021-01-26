import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({type:String,required:true,unique:true})
    email:string;
    @Prop({type:String,required:true,unique:true})
    userName:string;
    @Prop({type:String, required:true})
    firstName:string;
    @Prop({type:String})
    lastName:string;
    @Prop({type:String})
    password:string;
}

export const UserSchema = SchemaFactory.createForClass(User);
