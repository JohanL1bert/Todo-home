import React from 'react';

export const TodoCreate = () => {
  return (
    <div className="todo__create">
      <form action="" className="todo__create__form">
        <div className="todo__create__name">
          <label htmlFor="" className="todo__create__name-label">
            Name:
            <input type="text" className="todo__create__name-input" />
          </label>
        </div>
        <div className="todo__create__content">
          <div className="todo__create__content-name">
            Content:
            <textarea className="todo__create__content-textarea" />
          </div>
        </div>
        <div className="todo__create__category">
          <select name="select" className="todo__create__category-select">
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
            <option value="Quote">Quote</option>
          </select>
        </div>
        <button type="button" className="todo__create__btn">
          Create
        </button>
      </form>
      <button type="button" className="todo__create__visible-btn">
        Create note
      </button>
    </div>
  );
};
