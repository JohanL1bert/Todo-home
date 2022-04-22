import { IStoreTodo, EStoreTodo, TTodos } from 'common/interfaces/interfaces';
import { initialStore } from 'app/store/store';

export const todoReducer = (state: Array<IStoreTodo> = initialStore, action: TTodos) => {
  switch (action.type) {
    case EStoreTodo.ARCHIVE_ALL_TODO:
      return [
        ...state.map((el: IStoreTodo) => {
          return { ...el, active: action.payload.active, archive: action.payload.archive };
        }),
      ];
    case EStoreTodo.DELETE_ALL_TODO:
      return [...state.slice(0, action.payload)];
    case EStoreTodo.ADD_TODO:
      return [...state, action.payload];
    case EStoreTodo.EDIT_TODO:
      return [
        ...state.map((el: IStoreTodo) => {
          if (el.id === action.payload.id) {
            return { ...el, todoName: action.payload.name };
          }
          return el;
        }),
      ];
    case EStoreTodo.ARCHIVE_TODO:
      return [
        ...state.map((el: IStoreTodo) => {
          if (el.id === action.payload.id) {
            return { ...el, active: action.payload.active, archive: action.payload.archive };
          }
          return el;
        }),
      ];
    case EStoreTodo.DELETE_TODO:
      return [...state.filter((el: IStoreTodo) => el.id !== action.payload)];
    case EStoreTodo.UNARCHIVE_TODO:
      return [
        ...state.map((el: IStoreTodo) => {
          if (el.id === action.payload.id) {
            return { ...el, active: action.payload.active, archive: action.payload.archive };
          }
          return el;
        }),
      ];
    default:
      return state;
  }
};
