import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TodoCreate } from 'common/components/TodoCreate';
import { IStoreTodoState } from 'common/interfaces/interfaces';
import { TodoActiveItem } from 'common/components/TodoActiveItem';
import { todoHelpImg } from 'common/const/img.const';
import { NotFound } from 'common/components/NotFound';
import { actionArchiveAllTodo, actionDeleteAllTodo } from 'app/store/action';

export const TodoActive = () => {
  const todo = useSelector((state: IStoreTodoState) => state.todos);
  const filteredTodo = todo.filter((el) => el.active);

  const dispatch = useDispatch();

  const deleteTodos = () => {
    dispatch(actionDeleteAllTodo(0));
  };

  const archiveTodos = () => {
    dispatch(actionArchiveAllTodo());
  };

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
                onClick={archiveTodos}
                onKeyUp={archiveTodos}
                aria-hidden="true"
              />
              <img
                src={todoHelpImg.delete}
                alt="delete all todo list"
                className="todo__header__icon-img icon-delete"
                onClick={deleteTodos}
                onKeyUp={deleteTodos}
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="todo__body">
            <ul className="todo__body__items">
              {filteredTodo.length > 0 ? (
                filteredTodo.map((el) => <TodoActiveItem key={el.id} todo={el} />)
              ) : (
                <NotFound />
              )}
            </ul>
          </div>
        </div>
        <TodoCreate />
      </div>
    </section>
  );
};
