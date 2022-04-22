/* eslint-disable no-unused-vars */
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
  img: string;
  category: string;
  active: number;
  archive: number;
}
export enum EStoreTodo {
  ARCHIVE_ALL_TODO = 'ARCHIVE_ALL_TODO',
  DELETE_ALL_TODO = 'DELETE_ALL_TODO',
  ADD_TODO = 'ADD_TODO',
  EDIT_TODO = 'EDIT_TODO',
  ARCHIVE_TODO = 'ARCHIVE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  UNARCHIVE_TODO = 'UNARCHIVE_TODO',
}

export interface IActionArchiveAllTodo {
  type: EStoreTodo.ARCHIVE_ALL_TODO;
  payload: {
    archive: boolean;
    active: boolean;
  };
}

export interface IActionDeleteAllTodo {
  type: EStoreTodo.DELETE_ALL_TODO;
  payload: number;
}

export interface IActionAddTodo {
  type: EStoreTodo.ADD_TODO;
  payload: {
    id: number;
    todoImg: string;
    todoName: string;
    todoCreated: string;
    todoCategory: string;
    todoContent: string;
    todoDates: string;
    active: boolean;
    archive: boolean;
  };
}

export interface IActionEditTodo {
  type: EStoreTodo.EDIT_TODO;
  payload: {
    id: number;
    name: string;
  };
}

export interface IActionArchiveTodo {
  type: EStoreTodo.ARCHIVE_TODO;
  payload: {
    id: number;
    active: boolean;
    archive: boolean;
  };
}

export interface IActionDeleteTodo {
  type: EStoreTodo.DELETE_TODO;
  payload: number;
}

export interface IActionUnArchiveTodo {
  type: EStoreTodo.UNARCHIVE_TODO;
  payload: {
    id: number;
    active: boolean;
    archive: boolean;
  };
}

export type TTodos =
  | IActionArchiveAllTodo
  | IActionDeleteAllTodo
  | IActionAddTodo
  | IActionEditTodo
  | IActionArchiveTodo
  | IActionDeleteTodo
  | IActionUnArchiveTodo;

export type TStatusTodo = {
  category: string;
  img: string;
  active: number;
  archive: number;
};

export type TStatusCategories = {
  [key: string]: TStatusTodo;
};
