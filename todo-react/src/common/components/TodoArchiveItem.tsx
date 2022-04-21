import React from 'react';
import { useDispatch } from 'react-redux';
import { IStoreTodo } from 'common/interfaces/interfaces';
import { todoHelpImg } from 'common/const/img.const';
import { actionDeleteTodo, actionUnArchiveTodo } from 'app/store/action';

export const TodoArchiveItem = ({ todo }: { todo: IStoreTodo }) => {
  const dispatch = useDispatch();

  const unArchiveItem = () => {
    dispatch(actionUnArchiveTodo(todo.id));
  };

  const deleteItem = () => {
    dispatch(actionDeleteTodo(todo.id));
  };

  return (
    <li className="archive__item">
      <div className="archive__item__inner">
        <img src={todo.todoImg} alt="status" className="archive__item__img" />
        <label className="archive__item__name" htmlFor="todo-input">
          {todo.todoName}
        </label>
      </div>
      <div className="archive__item__created">{todo.todoCreated}</div>
      <div className="archive__item__category">{todo.todoCategory}</div>
      <div className="archive__item__content">{todo.todoContent}</div>
      <div className="archive__item__dates">{todo.todoDates}</div>
      <div className="archive__item__img">
        <img
          src={todoHelpImg.arhcive}
          alt="archive icon"
          className="archive__item__archived"
          onClick={unArchiveItem}
          onKeyUp={unArchiveItem}
          aria-hidden="true"
        />
        <img
          src={todoHelpImg.delete}
          alt="delete todo"
          className="archive__item__delete"
          onClick={deleteItem}
          onKeyUp={unArchiveItem}
          aria-hidden="true"
        />
      </div>
    </li>
  );
};
