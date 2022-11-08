import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Todo, TodoSchema } from './todo.schema';
import { TodoRepository } from './todo.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])],
  controllers: [TodoController],
  providers: [TodoService,TodoRepository],
})
export class TodoModule {}
