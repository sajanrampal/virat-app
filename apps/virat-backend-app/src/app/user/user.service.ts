import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument} from "./user.schema"

@Injectable()
export class UserService{
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>){}

    getAllUser():Promise<User[]>{
        return this.userModel.find().exec();
    }

    getUser(id:string){
        return this.userModel.findOne({_id:id})
    }

    saveUser(user:User):Promise<User>{
        try {
            const createdUser = new this.userModel(user);
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

    deleteUser(id:string){
        return this.userModel.findByIdAndDelete(id);
    }

}