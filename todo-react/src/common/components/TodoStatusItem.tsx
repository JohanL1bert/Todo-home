import React from 'react';
import { ITodoStatus } from 'common/interfaces/interfaces';

export const TodoStatusItem = ({ todo }: { todo: ITodoStatus }) => {
  return (
    <li className="note__item">
      <div className="note__item__inner">
        <img src="{todoItem.img}" alt="status" className="todo__item__img" />
        <div className="note__item__name">{1}</div>
      </div>
      <div className="note__item__active">{2}</div>
      <div className="note__item__archived">{todo.img}</div>
    </li>
  );
};
