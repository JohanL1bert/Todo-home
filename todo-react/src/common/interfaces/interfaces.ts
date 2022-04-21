export interface IStoreTodo {
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
export interface IStoreTodoState {
  todos: IStoreTodo[];
}

export interface ITodoStatus {
  property: { [key: string]: string };
  img: string;
}
