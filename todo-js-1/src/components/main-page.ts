import { ITodo } from './interfaces';
import { switchCategory, optionsDate } from './helpers';

export class MainPage {
  todoForm: HTMLFormElement;
  visibleNotesBtn: HTMLButtonElement;
  createNoteBtn: HTMLButtonElement;
  contentName: HTMLInputElement;
  contentCont: HTMLInputElement;
  selectOpt: HTMLSelectElement;
  ulTag: HTMLUListElement;
  constructor() {
    this.visibleNotesBtn = document.querySelector('.todo__create__visible') as HTMLButtonElement;
    this.todoForm = document.querySelector('.todo__create__form') as HTMLFormElement;
    this.createNoteBtn = document.querySelector('.todo__create__btn') as HTMLButtonElement;
    this.contentName = document.querySelector('.todo__create__name') as HTMLInputElement;
    this.contentCont = document.querySelector('.todo__create__content') as HTMLInputElement;
    this.selectOpt = document.querySelector('.todo__create__category') as HTMLSelectElement;
    this.ulTag = document.querySelector('.todo__body__items') as HTMLUListElement;
  }

  private visibleFormNotes() {
    this.todoForm.classList.add('mode-visible');
  }

  private parseContentDates(content: string) {}

  private createTodo(todoItem: ITodo) {
    return `<li class="todo__item">
    <img src="${todoItem.categoryImg}" alt="status" class="todo__item__img" />
    <div class="todo__item__name">${todoItem.name}</div>
    <div class="todo__item__created">${todoItem.created}</div>
    <div class="todo__item__category">${todoItem.category}</div>
    <div class="todo__item__content">${todoItem.content}</div>
    <div class="todo__item__dates">${todoItem.dates}</div>
    <div class="todo__item__change">${1}</div>
    <div class="todo__item__archived">${2}</div>
    <div class="todo__item__delete">${3}</div>
  </li>`;
  }

  private appendTodo(todo: string) {
    this.ulTag.insertAdjacentHTML('beforeend', todo);
  }

  private createNotes(event: Event) {
    event.preventDefault();
    const name = this.contentName.value;
    const content = this.contentCont.value;
    const opt = this.selectOpt.value;
    const { category, img } = switchCategory(opt);
    const dateObj = new Date();
    const date = dateObj.toLocaleDateString('en-Us', optionsDate);
    this.parseContentDates(content);

    const todoValue: ITodo = {
      categoryImg: img,
      name: name,
      created: date,
      category: category,
      content: '',
      dates: '',
    };

    const htmlTodo = this.createTodo(todoValue);
    this.appendTodo(htmlTodo);

    this.todoForm.classList.remove('mode-visible');
  }

  public rootMainPage() {
    this.visibleNotesBtn.addEventListener('click', this.visibleFormNotes.bind(this));
    this.createNoteBtn.addEventListener('click', this.createNotes.bind(this));
  }
}
