import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { AbstractDocument } from '@app/common';


export type TodoDocument = Todo & Document;

@Schema()
export class Todo extends AbstractDocument {
    @Prop({required:true})
    userId: string;

    @Prop({required:true})
    todo: string

    @Prop({default:false})
    status?: boolean
}

export const TodoSchema = SchemaFactory.createForClass(Todo);