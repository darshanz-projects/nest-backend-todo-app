import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Todo, TodoDocument } from "./todo.schema";

@Injectable()
export class TodoRepository {
    constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

    async findOne(userFilterQuery: FilterQuery<Todo>): Promise<Todo> {
        return this.todoModel.findOne(userFilterQuery);
    }

    async find(usersFilterQuery: FilterQuery<Todo>): Promise<Todo[]> {
        return this.todoModel.find(usersFilterQuery)
    }

    async create(user: Todo): Promise<Todo> {
        const newUser = new this.todoModel(user);
        return newUser.save()
    }

    async findOneAndUpdate(userFilterQuery: FilterQuery<Todo>, user: Partial<Todo>): Promise<Todo> {
        return this.todoModel.findOneAndUpdate(userFilterQuery, user, { new: true });
    }

    async deleteOne(_id:string): Promise<Todo> {
        return this.todoModel.findOneAndDelete({_id});
    }
}