/* eslint-disable no-param-reassign */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  IStoreTodo,
  IStoreTodoState,
  TStatusTodo,
  TStatusCategories,
} from 'common/interfaces/interfaces';
import { TodoStatusItem } from 'common/components/TodoStatusItem';
import { NotFound } from 'common/components/NotFound';

export const TodoStatus = () => {
  const todoStatus = useSelector((state: IStoreTodoState) => state.todos);

  const filteredData = () => {
    const createObjectStatus = todoStatus.reduce(
      (acc: Array<never[] | TStatusTodo>, curr: IStoreTodo) => {
        acc[curr.todoCategory as keyof {}] = {
          category: curr.todoCategory,
          img: curr.todoImg,
          active: 0,
          archive: 0,
        };
        return acc;
      },
      []
    ) as TStatusCategories | never[];

    const getStatusArr = Object.values(createObjectStatus);

    const filteredArrStatus = getStatusArr.map((el) => {
      // eslint-disable-next-line array-callback-return
      todoStatus.map((secondEl) => {
        if (el.category === secondEl.todoCategory) {
          if (secondEl.active) {
            el.active += 1;
          }
          if (secondEl.archive) {
            el.archive += 1;
          }
        }
      });
      return el;
    });

    return filteredArrStatus;
  };

  const filteredTodo = filteredData();
  return (
    <section className="note">
      <div className="container">
        <div className="note__inner">
          <div className="note__header">
            <div className="note__header__category">Note Category</div>
            <div className="note__header__active">Active</div>
            <div className="note__header__archived">Archived</div>
          </div>
          <div className="note__body">
            <div className="note__body__inner">
              <ul className="note__body__items">
                {filteredTodo.length > 0 ? (
                  filteredTodo.map((el, index: number) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <TodoStatusItem key={index} todo={el} />
                  ))
                ) : (
                  <NotFound />
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
