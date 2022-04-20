/* import { IStoreTodoState } from 'common/interfaces/interfaces'; */
import { IStoreTodo } from 'common/interfaces/interfaces';
import { initialStore } from 'app/store';

export const reducer = (
  state: any = initialStore,
  action: { type: string; payload: IStoreTodo }
) => {
  switch (action.type) {
    case 'ADD__TODO':
      return { ...state, ...state.state.push(action.payload) };
    default:
      return state;
  }
};
