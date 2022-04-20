import React, { useState, useRef } from 'react';
/* import { useDispatch } from 'react-redux'; */

export const TodoCreate = () => {
  /*   const dispatch = useDispatch(); */
  const [visible, setVisible] = useState<boolean>(false);
  const inputName = useRef<HTMLInputElement>(null);
  const contentArea = useRef<HTMLTextAreaElement>(null);
  const selectOption = useRef<HTMLSelectElement>(null);

  const changeVisibleForm = () => {
    setVisible(true);
    console.log(visible);

    /* dispatch({ type: 'ADD__TODO', payload: {} }); */
  };

  const createTodo = () => {};

  return (
    <div className="todo__create">
      <form className="todo__create__form">
        <div className="todo__create__name">
          <label htmlFor="" className="todo__create__name-label">
            Name:
            <input type="text" className="todo__create__name-input" ref={inputName} />
          </label>
        </div>
        <div className="todo__create__content">
          <div className="todo__create__content-name">
            Content:
            <textarea className="todo__create__content-textarea" ref={contentArea} />
          </div>
        </div>
        <div className="todo__create__category">
          <select name="select" className="todo__create__category-select" ref={selectOption}>
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
            <option value="Quote">Quote</option>
          </select>
        </div>
        <button type="button" className="todo__create__btn" onClick={createTodo}>
          Create
        </button>
      </form>
      <button type="button" className="todo__create__visible-btn" onClick={changeVisibleForm}>
        Create note
      </button>
    </div>
  );
};
