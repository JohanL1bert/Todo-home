import React from 'react';
import { useSelector } from 'react-redux';
import { TodoCreate } from 'common/components/TodoCreate';
import { IStoreTodoState } from 'common/interfaces/interfaces';
import { TodoActiveItem } from 'common/components/TodoActiveItem';
import { todoHelpImg } from 'common/const/img.const';

export const TodoActive = () => {
  /*   const dispatch = useDispatch(); */
  const todo = useSelector((state: IStoreTodoState) => state.state);
  const filterTodo = todo.filter((el) => el.active);

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
                src={todoHelpImg.arhcive}
                alt="archive all todo list"
                className="todo__header__icon-img icon-archive"
              />
              <img
                src={todoHelpImg.delete}
                alt="delete all todo list"
                className="todo__header__icon-img icon-delete"
              />
            </div>
          </div>
          <div className="todo__body">
            <ul className="todo__body__items">
              {filterTodo.map((el) => (
                <TodoActiveItem key={el.id} todo={el} />
              ))}
            </ul>
          </div>
        </div>
        <TodoCreate />
      </div>
    </section>
  );
};
