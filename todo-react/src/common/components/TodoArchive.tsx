import React from 'react';
import { useSelector } from 'react-redux';
import { TodoArchiveItem } from 'common/components/TodoArchiveItem';
import { IStoreTodoState } from 'common/interfaces/interfaces';
import { NotFound } from 'common/components/NotFound';

export const TodoArchive = () => {
  const todoArchive = useSelector((state: IStoreTodoState) => state.todos);
  const filteredTodos = todoArchive.filter((el) => el.archive);

  return (
    <section className="note-archive">
      <div className="container">
        <div className="note-archive__inner">
          <h3 className="note-archive__header">Archived notes</h3>
          <ul className="note-archive__items">
            {filteredTodos.length > 0 ? (
              filteredTodos.map((el) => {
                return <TodoArchiveItem key={el.id} todo={el} />;
              })
            ) : (
              <NotFound />
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
