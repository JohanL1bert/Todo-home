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
  state: IStoreTodo[];
}
