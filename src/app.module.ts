import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
    envFilePath:['.env']
   }),
   MongooseModule.forRoot('mongodb://localhost:27017/todo'),
  TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
