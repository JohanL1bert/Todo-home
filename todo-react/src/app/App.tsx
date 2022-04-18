import React from 'react';

export const App = () => {
  return (
    <main className="main">
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
          <div className="todo__create">
            <form action="" className="todo__create__form">
              <label htmlFor="" className="todo__create__name-label">
                Name:
                <input type="text" className="todo__create__name" />
              </label>
              <label htmlFor="" className="todo__create__name-label">
                Content:
                <textarea className="todo__create__content" />
              </label>
              <select name="select" className="todo__create__category">
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
                <option value="Quote">Quote</option>
              </select>
              <button type="button" className="todo__create__btn">
                Create
              </button>
            </form>
            <button type="button" className="todo__create__visible">
              Create note
            </button>
          </div>
        </div>
      </section>
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
                <ul className="note__body__items" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="note-archive">
        <div className="container">
          <div className="note-archive__inner">
            <h3 className="note-archive__header">Archived notes</h3>
            <ul className="note-archive__items" />
          </div>
        </div>
      </section>
    </main>
  );
};
