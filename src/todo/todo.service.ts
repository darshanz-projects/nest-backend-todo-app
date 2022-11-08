import { Injectable } from "@nestjs/common";
import { UpdateTodoDto } from "./dto/update-todo";
import { v4 as uuidv4 } from 'uuid';

import { Todo } from "./todo.schema";
import { TodoRepository } from "./todo.repository";
import { Mongoose } from "mongoose";

@Injectable()
export class TodoService {
    constructor(private readonly todoRepository: TodoRepository) {}

    async getTodoById(_id: string): Promise<Todo> {
        return this.todoRepository.findOne({ _id })
    }

    async getTodos(): Promise<Todo[]> {
        return this.todoRepository.find({});
    }

    async createTodo(userId: string, todo: string): Promise<Todo> {
        return this.todoRepository.create({
            userId,
            todo,
            _id:uuidv4(),
            createdAt: Date.now().toString(),
            updatedAt: Date.now().toString()
        })
    }

    async updateTodo(_id: string, userUpdates: UpdateTodoDto): Promise<Todo> {
        return this.todoRepository.findOneAndUpdate({ _id }, userUpdates);
    }

    async deleteTodo(_id: string): Promise<Todo> {
        return this.todoRepository.deleteOne(_id);
    }
}