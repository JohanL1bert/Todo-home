import { IsString, IsNumber, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreatTodoNotesDto {
  @IsString()
  todoImg: string;

  @IsString()
  @IsNotEmpty()
  todoName: string;

  @IsString()
  @IsNotEmpty()
  todoCreated: string;

  @IsString()
  @IsNotEmpty()
  todoCategory: string;

  @IsString()
  todoContent: string;

  @IsString()
  todoDates: string;

  @IsBoolean()
  active: boolean;

  @IsBoolean()
  archive: boolean;
}

export class UpdateTodoNotesDto {
  @IsString()
  todoImg: string;

  @IsString()
  @IsNotEmpty()
  todoName: string;

  @IsString()
  @IsNotEmpty()
  todoCreated: string;

  @IsString()
  @IsNotEmpty()
  todoCategory: string;

  @IsString()
  todoContent: string;

  @IsString()
  todoDates: string;

  @IsBoolean()
  active: boolean;

  @IsBoolean()
  archive: boolean;
}

export class StatusTodoNotesDto {
  [x: string]: any;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  img: string;

  @IsNumber()
  active: number;

  @IsNumber()
  archive: number;
}
