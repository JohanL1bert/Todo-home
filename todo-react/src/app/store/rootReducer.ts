import { combineReducers } from 'redux';
import { todoReducer } from 'app/store/reducer';

export const rootReducer = combineReducers({
  todos: todoReducer,
});
