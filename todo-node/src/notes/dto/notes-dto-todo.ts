export class CreatTodoNotesDto {
  id: number;
  todoImg: string;
  todoName: string;
  todoCreated: string;
  todoCategory: string;
  todoContent: string;
  todoDates: string;
  active: boolean;
  archive: boolean;
}

export class UpdateTodoNotesDto {
  todoImg: string;
  todoName: string;
  todoCreated: string;
  todoCategory: string;
  todoContent: string;
  todoDates: string;
  active: boolean;
  archive: boolean;
}

export class StatusTodoNotesDto {
  category: string;
  img: string;
  active: number;
  archive: number;
}
