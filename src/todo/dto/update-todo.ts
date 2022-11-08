import { IsBoolean, IsDateString, IsNotEmpty, IsString } from "class-validator";

export class UpdateTodoDto {
  @IsBoolean()
  @IsNotEmpty()
  status: boolean

  @IsString()
  @IsNotEmpty()
  updatedAt: string;
}