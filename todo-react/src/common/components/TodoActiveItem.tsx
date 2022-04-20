/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import { IStoreTodo } from 'common/interfaces/interfaces';
import { todoHelpImg } from 'common/const/img.const';

export const TodoActiveItem = ({ todo }: { todo: IStoreTodo }) => {
  const editTodo = () => {};
  const archiveTodo = () => {};
  const deleteTodo = () => {};
  return (
    <li className="todo__item">
      <div className="todo__item__inner">
        <img src={todo.todoImg} alt="status" className="todo__item__img" />
        <label className="todo__item__name" htmlFor="todo-input">
          {todo.todoName}
        </label>
        <input type="text" className="todo__item__name-input" />
      </div>
      <div className="todo__item__created">{todo.todoCreated}</div>
      <div className="todo__item__category">{todo.todoCategory}</div>
      <div className="todo__item__content">{todo.todoContent}</div>
      <div className="todo__item__dates">{todo.todoDates}</div>
      <div className="todo__item__wrapper">
        <img
          src={todoHelpImg.edit}
          alt="edit icon"
          className="todo__item__change"
          onClick={editTodo}
        />
        <img
          src={todoHelpImg.arhcive}
          alt="archive icon"
          className="todo__item__archived"
          onClick={archiveTodo}
        />
        <img
          src={todoHelpImg.delete}
          alt="delete todo"
          className="todo__item__delete"
          onClick={deleteTodo}
        />
      </div>
    </li>
  );
};
