export const ARCHIVE_ALL_TODO = 'ARCHIVE_ALL_TODO';
export const DELETE_ALL_TODO = 'DELETE_ALL_TODO';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const ARCHIVE_TODO = 'ARCHIVE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UNARCHIVE_TODO = 'UNARCHIVE_TODO';

export const actionArchiveAllTodo = (act: boolean, arch: boolean) => {
  return {
    type: ARCHIVE_ALL_TODO,
    payload: {
      archive: act,
      active: arch,
    },
  };
};

export const actionDeleteAllTodo = (value: number) => {
  return {
    type: DELETE_ALL_TODO,
    payload: value,
  };
};

export const actionAddTodo = (
  id: number,
  todoImg: string,
  todoName: string,
  todoCreated: string,
  todoCategory: string,
  todoContent: string,
  todoDates: string,
  active: boolean,
  archive: boolean
) => {
  return {
    type: ADD_TODO,
    payload: {
      id,
      todoName,
      todoImg,
      todoCreated,
      todoCategory,
      todoContent,
      todoDates,
      active,
      archive,
    },
  };
};

export const actionEditTodo = (id: number, name: string) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      name,
    },
  };
};

export const actionArchiveTodo = (id: number) => {
  return {
    type: ARCHIVE_TODO,
    payload: {
      id,
      active: false,
      archive: true,
    },
  };
};

export const actionDeleteTodo = (id: number) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const actionUnArchiveTodo = (id: number) => {
  return {
    type: UNARCHIVE_TODO,
    payload: {
      id,
      active: true,
      archive: false,
    },
  };
};
