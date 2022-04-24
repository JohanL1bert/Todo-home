import { Injectable } from '@nestjs/common';
import { Notes } from './notes.module';
import { StatusTodoNotesDto } from './dto/notes-dto-todo';

@Injectable()
export class NotesService {
  private storeTodo: Array<Notes> = [
    {
      id: 1,
      todoImg: 'Image Task',
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
      todoImg: 'Random image',
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
      todoImg: 'Idea image',
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
      todoImg: 'Quote image',
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
      todoImg: 'Task image',
      todoName: 'Inline',
      todoCreated: 'April 10, 2021',
      todoCategory: 'Task',
      todoContent: 'Inline',
      todoDates: '',
      active: false,
      archive: true,
    },
    {
      id: 6,
      todoImg: 'Quote image',
      todoName: 'Some info',
      todoCreated: 'January 10, 2021',
      todoCategory: 'Quote',
      todoContent: 'Some content',
      todoDates: '',
      active: false,
      archive: true,
    },
    {
      id: 7,
      todoImg: 'Idea image',
      todoName: 'Inline idead',
      todoCreated: 'April 10, 2021',
      todoCategory: 'Idea',
      todoContent: 'Inline ideaa',
      todoDates: '',
      active: true,
      archive: false,
    },
  ];

  createNotes({
    todoImg,
    todoName,
    todoCreated,
    todoCategory,
    todoContent,
    todoDates,
    active,
    archive,
  }) {
    const id = this.storeTodo.length + 1;
    const newTodo = new Notes(
      id,
      todoImg,
      todoName,
      todoCreated,
      todoCategory,
      todoContent,
      todoDates,
      active,
      archive,
    );
    this.storeTodo.push(newTodo);
    return newTodo;
  }

  deleteNotes(id: number) {
    const findArr = this.storeTodo.filter((note) => note.id === id);
    this.storeTodo.splice(id - 1, 1);
    return findArr;
  }

  private findTodos(id: number): [Notes, number] {
    const findTodoindex = this.storeTodo.findIndex(
      (note) => note.id === Number(id),
    );

    const todoObject = this.storeTodo[findTodoindex];
    if (!todoObject) {
      throw new Error('Could not find notes');
    }

    return [todoObject, findTodoindex];
  }

  updateNotes(id: string, todoUpdate: Omit<Notes, 'id'>) {
    const [todoObject, todoIndex] = this.findTodos(Number(id));

    const updateTodo = Object.assign({}, todoObject);

    if (todoUpdate.todoImg) {
      updateTodo.todoImg = todoUpdate.todoImg;
    }

    if (todoUpdate.todoName) {
      updateTodo.todoName = todoUpdate.todoName;
    }

    if (todoUpdate.todoCreated) {
      updateTodo.todoCreated = todoUpdate.todoCreated;
    }

    if (todoUpdate.todoCategory) {
      updateTodo.todoCategory = todoUpdate.todoCategory;
    }

    if (todoUpdate.todoContent) {
      updateTodo.todoContent = todoUpdate.todoCategory;
    }

    if (todoUpdate.todoDates) {
      updateTodo.todoDates = todoUpdate.todoDates;
    }

    if (todoUpdate.active === true || todoUpdate.active === false) {
      updateTodo.active = todoUpdate.active;
    }

    if (todoUpdate.archive === true || todoUpdate.archive === false) {
      updateTodo.archive = todoUpdate.archive;
    }

    this.storeTodo[todoIndex] = updateTodo;
  }

  getOneNotes(id: number) {
    const value = this.storeTodo.find((note) => note.id === id);
    if (!value) {
      throw new Error('Could not find elements');
    }
    return value;
  }

  getAllNotes() {
    return this.storeTodo;
  }

  getStatsNotes() {
    const getCopyArray = JSON.stringify(this.storeTodo);
    const parseTodoArray: Array<Notes> = JSON.parse(getCopyArray);
    const filterArr = this.filterStatsTodo(parseTodoArray);
    return filterArr;
  }

  filterStatsTodo(todoArray: Array<Notes>) {
    const createObjectStatus = todoArray.reduce(
      (acc: Array<never[] | StatusTodoNotesDto>, curr) => {
        acc[curr.todoCategory as keyof Record<string, never>] = {
          category: curr.todoCategory,
          img: curr.todoImg,
          active: 0,
          archive: 0,
        };
        return acc;
      },
      [],
    ) as StatusTodoNotesDto | never[];

    const getStatusArr = Object.values(createObjectStatus);

    const filteredArrStatus = getStatusArr.map((el) => {
      todoArray.map((secondEl) => {
        if (el.category === secondEl.todoCategory) {
          if (secondEl.active) {
            el.active += 1;
          }
          if (secondEl.archive) {
            el.archive += 1;
          }
        }
      });
      return el;
    });

    return filteredArrStatus;
  }
}
