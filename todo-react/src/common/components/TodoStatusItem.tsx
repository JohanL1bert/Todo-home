import React from 'react';
import { ITodoStatus } from 'common/interfaces/interfaces';

export const TodoStatusItem = ({ todo }: { todo: ITodoStatus }) => {
  return (
    <li className="note__item">
      <div className="note__item__inner">
        <img src={todo.img} alt="status" className="todo__item__img" />
        <div className="note__item__name">{todo.category}</div>
      </div>
      <div className="note__item__active">{todo.active}</div>
      <div className="note__item__archived">{todo.archive}</div>
    </li>
  );
};
