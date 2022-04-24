import {
  IsString,
  IsNumber,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

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
  @IsOptional()
  todoImg: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  todoName: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  todoCreated: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  todoCategory: string;

  @IsString()
  @IsOptional()
  todoContent: string;

  @IsString()
  @IsOptional()
  todoDates: string;

  @IsBoolean()
  @IsOptional()
  active: boolean;

  @IsBoolean()
  @IsOptional()
  archive: boolean;
}

export class StatusTodoNotesDto {
  [x: string]: any;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsOptional()
  img: string;

  @IsNumber()
  @IsOptional()
  active: number;

  @IsNumber()
  @IsOptional()
  archive: number;
}
