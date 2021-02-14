import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule} from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://sajan:Sajan@1234@cul-free-proj.huimb.mongodb.net/viratDb?retryWrites=true&w=majority`,  {
    authSource: 'admin',
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
}),UserModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
