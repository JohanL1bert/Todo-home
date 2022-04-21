import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IStoreTodo } from 'common/interfaces/interfaces';
import { todoHelpImg } from 'common/const/img.const';
import { actionArchiveTodo, actionDeleteTodo, actionEditTodo } from 'app/store/action';

export const TodoActiveItem = ({ todo }: { todo: IStoreTodo }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [visibleInput, setVisibleInput] = useState<boolean>(false);

  const dispatch = useDispatch();

  const editTodo = () => {
    setVisibleInput(!visibleInput);
    dispatch(actionEditTodo(todo.id, inputValue));
  };

  const archiveTodo = () => {
    dispatch(actionArchiveTodo(todo.id));
  };

  const deleteTodo = () => {
    dispatch(actionDeleteTodo(todo.id));
  };

  return (
    <li className={`todo__item ${visibleInput ? 'mode-edit' : null}`}>
      <div className="todo__item__inner">
        <img src={todo.todoImg} alt="status" className="todo__item__img" />
        <label className="todo__item__name" htmlFor="todo-input">
          {todo.todoName}
        </label>
        <input
          type="text"
          className="todo__item__name-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        />
      </div>
      <div className="todo__item__created">{todo.todoCreated}</div>
      <div className="todo__item__category">{todo.todoCategory}</div>
      <div className="todo__item__content">{todo.todoContent}</div>
      <div className="todo__item__dates">{todo.todoDates}</div>
      <div className="todo__item__wrapper">
        <img
          src={todoHelpImg.edit}
          alt="edit icon"
          className={`todo__item__change ${visibleInput ? 'edit-img' : null}`}
          onClick={editTodo}
          onKeyUp={editTodo}
          aria-hidden="true"
        />
        <img
          src={todoHelpImg.arhcive}
          alt="archive icon"
          className="todo__item__archived"
          onClick={archiveTodo}
          onKeyUp={archiveTodo}
          aria-hidden="true"
        />
        <img
          src={todoHelpImg.delete}
          alt="delete todo"
          className="todo__item__delete"
          onClick={deleteTodo}
          onKeyUp={deleteTodo}
          aria-hidden="true"
        />
      </div>
    </li>
  );
};
