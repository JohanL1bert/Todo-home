import { todoHelpImg } from './helpers';
import { IStoreTodo } from './interfaces';

export class StateManager {
  store: Array<{
    id: number;
    todoImg: string;
    todoName: string;
    todoCreated: string;
    todoCategory: string;
    todoContent: string;
    todoDates: string;
    active: boolean;
    archive: boolean;
  }>;
  constructor() {
    this.store = [
      {
        id: 1,
        todoImg: `${todoHelpImg.shop}`,
        todoName: 'Shopping list',
        todoCreated: 'April 20, 2021',
        todoCategory: 'Task',
        todoContent: 'Tomato',
        todoDates: '',
        active: true,
        archive: false,
      },
      {
        id: 2,
        todoImg: `${todoHelpImg.random}`,
        todoName: 'The theory of',
        todoCreated: 'April 27, 2021',
        todoCategory: 'Random Thought',
        todoContent: 'The evolution',
        todoDates: '',
        active: true,
        archive: false,
      },
      {
        id: 3,
        todoImg: `${todoHelpImg.idea}`,
        todoName: 'New Feature',
        todoCreated: 'May 05, 2021',
        todoCategory: 'Idea',
        todoContent: 'Go to 3/5/2021, 5/5/2021',
        todoDates: '3/5/2021, 5/5/2021',
        active: true,
        archive: false,
      },
      {
        id: 4,
        todoImg: `${todoHelpImg.quote}`,
        todoName: 'Books',
        todoCreated: 'May 15, 2021',
        todoCategory: 'Quote',
        todoContent: 'The lean startup',
        todoDates: '',
        active: true,
        archive: false,
      },
      {
        id: 5,
        todoImg: `${todoHelpImg.shop}`,
        todoName: 'Inline',
        todoCreated: 'April 10, 2021',
        todoCategory: 'Task',
        todoContent: 'Inline',
        todoDates: '',
        active: false,
        archive: true,
      },
    ];
  }
}

export class SingletonReproducer {
  static instance = new StateManager();

  private constructor() {
    if (SingletonReproducer.instance) {
      throw new Error(
        'Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.'
      );
    }
  }

  static getInstance() {
    return SingletonReproducer.instance;
  }
}
