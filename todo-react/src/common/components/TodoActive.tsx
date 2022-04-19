import React from 'react';
import { TodoCreate } from 'common/components/TodoCreate';

export const TodoActive = () => {
  return (
    <section className="todo">
      <div className="container">
        <div className="todo__inner">
          <div className="todo__header">
            <p className="todo__header__name">Name</p>
            <p className="todo__header__created">Created</p>
            <p className="todo__header__category">Category</p>
            <p className="todo__header__content">Content</p>
            <p className="todo__header__dates">Dates</p>
            <div className="todo__header__icon">
              <img
                src="./assets/archive.svg"
                alt="archive all todo list"
                className="todo__header__icon-img icon-archive"
              />
              <img
                src="./assets/garbage.svg"
                alt="delete all todo list"
                className="todo__header__icon-img icon-delete"
              />
            </div>
          </div>
          <div className="todo__body">
            <ul className="todo__body__items" />
          </div>
        </div>
        <TodoCreate />
      </div>
    </section>
  );
};
