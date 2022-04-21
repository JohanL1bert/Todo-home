import React from 'react';
import { useSelector } from 'react-redux';
import { IStoreTodo, IStoreTodoState } from 'common/interfaces/interfaces';
import { TodoStatusItem } from 'common/components/TodoStatusItem';
import { NotFound } from 'common/components/NotFound';

export const TodoStatus = () => {
  const todoStatus = useSelector((state: IStoreTodoState) => state.todos);

  const filteredData = () => {
    const todoCategories = todoStatus.reduce((acc: any, curr: IStoreTodo) => {
      console.log(curr);
      return acc;
    }, []);
    return todoCategories;
  };

  const filteredTodo = filteredData();
  console.log(filteredTodo, 's');

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
                  filteredTodo.map((el: any, index: number) => (
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
/* acc[curr.todoCategory] = object;
if (acc[curr.todoCategory]) {
  object.name = curr.todoCategory;
  object.count = (+curr.todoCategory || 0) + 1;
  object.active = +curr.active ? +1 : +0;
  object.archive = +curr.archive ? +1 : +0;
  object.todoImg = curr.todoImg;
}

console.log(object, 'object');
console.log(acc);
return acc; */
