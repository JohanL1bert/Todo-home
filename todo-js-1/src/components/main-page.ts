import { ITodo, ISwitchCat } from './interfaces';
import { switchCategory, optionsDate, todoHelpImg, regPattern, configObs } from './helpers';

export class MainPage {
  isEdit: boolean;
  todoForm: HTMLFormElement;
  visibleNotesBtn: HTMLButtonElement;
  createNoteBtn: HTMLButtonElement;
  contentName: HTMLInputElement;
  contentCont: HTMLInputElement;
  selectOpt: HTMLSelectElement;
  ulTag: HTMLUListElement;
  todoChange: HTMLImageElement;
  constructor() {
    this.isEdit = false;
    this.visibleNotesBtn = document.querySelector('.todo__create__visible') as HTMLButtonElement;
    this.todoForm = document.querySelector('.todo__create__form') as HTMLFormElement;
    this.createNoteBtn = document.querySelector('.todo__create__btn') as HTMLButtonElement;
    this.contentName = document.querySelector('.todo__create__name') as HTMLInputElement;
    this.contentCont = document.querySelector('.todo__create__content') as HTMLInputElement;
    this.selectOpt = document.querySelector('.todo__create__category') as HTMLSelectElement;
    this.ulTag = document.querySelector('.todo__body__items') as HTMLUListElement;
    this.todoChange = document.querySelector('.todo__item__change') as HTMLImageElement;
  }

  public enterPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      return false;
    }
  }

  private visibleFormNotes() {
    this.todoForm.classList.add('mode-visible');
  }

  private parseContentDates(content: string) {
    const findDates = content.match(regPattern);
    if (findDates === null) {
      return {
        contentText: content,
        dateContent: '',
      };
    }

    let strDate = '';
    findDates.forEach((element, index) => {
      if (findDates[index + 1] !== undefined) {
        strDate += element + ', ';
      } else {
        strDate += element;
      }
    });

    return {
      contentText: content,
      dateContent: strDate,
    };
  }

  private createTodo(todoItem: ITodo) {
    return `
    <li class="todo__item">
    <div class="todo__item__name__inner">
      <img src="${todoItem.categoryImg}" alt="status" class="todo__item__img" />
      <label class="todo__item__name" for="todo-input"> ${todoItem.name} </label>
      <input type="text" id="todo-input" class="todo__item__name-input" />
    </div>
    <div class="todo__item__created">${todoItem.created}</div>
    <div class="todo__item__category">${todoItem.category}</div>
    <div class="todo__item__content">${todoItem.content}</div>
    <div class="todo__item__dates">${todoItem.dates}</div>
    <div class="todo__item__func">
      <img src="${todoHelpImg.edit}" alt="edit icon" class="todo__item__change" />
      <img
        src="${todoHelpImg.arhcive}"
        alt="archive icon"
        class="todo__item__archived"
      />
      <img src="${todoHelpImg.delete}" alt="delete todo" class="todo__item__delete" />
    </div>
  </li>`;
  }

  private appendTodo(todo: string) {
    this.ulTag.insertAdjacentHTML('beforeend', todo);
  }

  private countAcitve() {}

  private countArchive() {}

  private createNotes(event: Event) {
    event.preventDefault();
    const name = this.contentName.value;
    const content = this.contentCont.value;
    const opt = this.selectOpt.value;
    const { category, img }: ISwitchCat = switchCategory(opt);
    const dateObj = new Date();
    const date = dateObj.toLocaleDateString('en-Us', optionsDate);
    const { contentText, dateContent } = this.parseContentDates(content);

    const todoValue: ITodo = {
      categoryImg: img,
      name: name,
      created: date,
      category: category,
      content: contentText,
      dates: dateContent,
    };

    const htmlTodo = this.createTodo(todoValue);
    this.appendTodo(htmlTodo);

    this.todoForm.classList.remove('mode-visible');
  }

  private editTodo(event: Event) {
    const el = event.target as Element;
    if (el) {
      const element = el.closest('li');
      element?.classList.add('mode-edit');
    }
    return;
  }

  private deleteNode() {
    const val = this as unknown as HTMLLIElement;
    const element = val.closest('li');
    element?.remove();
  }

  private archiveTodo() {}

  private getTodofunc() {
    const getEdit = document.querySelectorAll('.todo__item__change');
    const getArchive = document.querySelectorAll('.todo__item__archive');
    const getDelete = document.querySelectorAll('.todo__item__delete');

    getEdit.forEach((edit) => edit.addEventListener('click', this.editTodo.bind(this)));
    getArchive.forEach((archive) => archive.addEventListener('click', this.archiveTodo.bind(this)));
    getDelete.forEach((del) => del.addEventListener('click', this.deleteNode));
  }

  public rootMainPage() {
    this.visibleNotesBtn.addEventListener('click', this.visibleFormNotes.bind(this));
    this.createNoteBtn.addEventListener('click', this.createNotes.bind(this));

    const observer = new MutationObserver(this.getTodofunc.bind(this));
    observer.observe(this.ulTag, configObs);

    window.addEventListener('keypress', this.enterPress.bind(this));
  }
}
