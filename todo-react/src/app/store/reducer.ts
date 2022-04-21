import { IStoreTodo } from 'common/interfaces/interfaces';
import { initialStore } from 'app/store/store';
import {
  DELETE_ALL_TODO,
  ARCHIVE_ALL_TODO,
  ADD_TODO,
  EDIT_TODO,
  ARCHIVE_TODO,
  DELETE_TODO,
  UNARCHIVE_TODO,
} from 'app/store/action';

export const todoReducer = (state: any = initialStore, action: { type: string; payload: any }) => {
  const { payload } = action;

  switch (action.type) {
    case ARCHIVE_ALL_TODO:
      return [
        ...state.map((el: IStoreTodo) => {
          return { ...el, active: payload.active, archive: payload.archive };
        }),
      ];
    case DELETE_ALL_TODO:
      return [...state.slice(0, action.payload)];
    case ADD_TODO:
      return [...state, payload];
    case EDIT_TODO:
      return [
        ...state.map((el: IStoreTodo) => {
          if (el.id === payload.id) {
            return { ...el, todoName: payload.name };
          }
          return el;
        }),
      ];
    case ARCHIVE_TODO:
      return [
        ...state.map((el: IStoreTodo) => {
          if (el.id === payload.id) {
            return { ...el, active: payload.active, archive: payload.archive };
          }
          return el;
        }),
      ];
    case DELETE_TODO:
      return [...state.filter((el: IStoreTodo) => el.id !== action.payload)];
    case UNARCHIVE_TODO:
      return [
        ...state.map((el: IStoreTodo) => {
          if (el.id === payload.id) {
            return { ...el, active: payload.active, archive: payload.archive };
          }
          return el;
        }),
      ];
    default:
      return state;
  }
};
