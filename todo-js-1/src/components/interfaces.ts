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

interface ISubActiveTodo {
  [key: string]: string | number;
  active: number;
  archive: number;
}

export interface IActiveTodo {
  task: ISubActiveTodo;
  random: ISubActiveTodo;
  idea: ISubActiveTodo;
  quote: ISubActiveTodo;
}

export interface IActiveNote {
  active: number;
  archive: number;
  name: string;
  img: string;
}
