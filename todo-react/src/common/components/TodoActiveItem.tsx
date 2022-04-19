import React from 'react';

export const TodoActiveItem = () => {
  return (
    <li className="todo__item" /* data-todo="${todo.id}" */>
      <div className="todo__item__name__inner">
        <img src="{todo.todoImg}" alt="status" className="todo__item__img" />
        <label className="todo__item__name" htmlFor="todo-input">
          {1}
        </label>
        <input type="text" id="todo-input" className="todo__item__name-input" />
      </div>
      <div className="todo__item__created">{1}</div>
      <div className="todo__item__category">{2}</div>
      <div className="todo__item__content">{3}</div>
      <div className="todo__item__dates">{4}</div>
      <div className="todo__item__func">
        <img src="{todoHelpImg.edit}" alt="edit icon" className="todo__item__change" />
        <img src="{todoHelpImg.arhcive}" alt="archive icon" className="todo__item__archived" />
        <img src="{todoHelpImg.delete}" alt="delete todo" className="todo__item__delete" />
      </div>
    </li>
  );
};
