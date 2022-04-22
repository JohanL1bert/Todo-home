import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { optionsDate } from 'common/const/config.const';
import { switchCategory, parseContentData } from 'common/helpers/filterCategory';
import { IStoreTodoState } from 'common/interfaces/interfaces';
import { actionAddTodo } from 'app/store/action';

export const TodoCreate = () => {
  const store = useSelector((state: IStoreTodoState) => state.todos);
  const id = store.length + 1;

  const dispatch = useDispatch();
  const [option, setOption] = useState<string>('Task');
  const [visible, setVisible] = useState<boolean>(false);
  const inputName = useRef<HTMLInputElement>(null);
  const contentArea = useRef<HTMLTextAreaElement>(null);

  const changeVisibleForm = () => {
    setVisible(true);
  };

  const createTodo = () => {
    setVisible(false);

    const inputValue = inputName.current?.value;
    const textAreaValue = contentArea.current?.value;
    const { category, img } = switchCategory(option);
    const { contentText, dateContent } = parseContentData(textAreaValue!);

    const dateObj = new Date();
    const created = dateObj.toLocaleDateString('en-Us', optionsDate);

    dispatch(
      actionAddTodo(id, img, inputValue!, created, category, contentText, dateContent, true, false)
    );

    inputName.current!.value = '';
    contentArea.current!.value = '';
    setOption('Task');
  };

  return (
    <div className="todo__create">
      <form className={`todo__create__form ${visible ? 'mode-visible' : null}`}>
        <div className="todo__create__name">
          <label htmlFor="todo__input" className="todo__create__name-label">
            Name:
            <input
              type="text"
              id="todo__inpu"
              className="todo__create__name-input"
              ref={inputName}
            />
          </label>
        </div>
        <div className="todo__create__content">
          <p className="todo__create__content-name">Content: </p>
          <textarea className="todo__create__content-textarea" ref={contentArea} />
        </div>
        <div className="todo__create__category">
          <select
            name="select"
            className="todo__create__category-select"
            onChange={(e) => setOption(e.target.value)}
          >
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
