import React from 'react';

export const TodoArchiveItem = () => {
  return (
    <li className="archive__item" data-todo="{archive.id}">
      <div className="archive__item__inner">
        <img src="{archive.todoImg}" alt="status" className="archive__item__img" />
        <label className="archive__item__name" htmlFor="todo-input">
          {1}
        </label>
      </div>
      <div className="archive__item__created">{2}</div>
      <div className="archive__item__category">{3}</div>
      <div className="archive__item__content">{4}</div>
      <div className="archive__item__dates">{5}</div>
      <div className="archive__item__img">
        <img src="{todoHelpImg.arhcive}" alt="archive icon" className="archive__item__archived" />
        <img src="{todoHelpImg.delete}" alt="delete todo" className="archive__item__delete" />
      </div>
    </li>
  );
};
