import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TODO_CONTROLLER } from '@app/common';
import { CreateTodo } from './dto/create-todo';
import { Todo } from './todo.schema';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/update-todo';

@Controller(TODO_CONTROLLER)
export class TodoController {

  constructor(private readonly todoService: TodoService) {}


  @Get(':id')
  async getUser(@Param('id') id: string): Promise<Todo> {
    return this.todoService.getTodoById(id);
  }

  @Get()
  async getUsers(): Promise<Todo[]> {
      return this.todoService.getTodos();
  }


  @Post()
  async createTodo(@Body() createTodo: CreateTodo): Promise<any> {
    const {todo}=createTodo;
    return this.todoService.createTodo("1",todo)
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
      return this.todoService.updateTodo(id, updateTodoDto);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<Todo> {
      return this.todoService.deleteTodo(id);
  }
}
