import { IsNotEmpty, IsString } from "class-validator";

export class CreateTodo {

  @IsString()
  @IsNotEmpty()
  todo:string

  
}