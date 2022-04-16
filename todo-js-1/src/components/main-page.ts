import { ITodo, ISwitchCat, IReset, IStore } from './interfaces';
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
  archiveAllTodoBtn: HTMLImageElement;
  deleteAllTodoBtn: HTMLImageElement;
  ulArchiveNotes: HTMLUListElement;
  noteBodyItems: HTMLUListElement;
  activeCounter: number;
  activeArchive: number;
  store: IStore;
  constructor(store: IStore) {
    this.isEdit = false;
    this.visibleNotesBtn = document.querySelector('.todo__create__visible') as HTMLButtonElement;
    this.todoForm = document.querySelector('.todo__create__form') as HTMLFormElement;
    this.createNoteBtn = document.querySelector('.todo__create__btn') as HTMLButtonElement;
    this.contentName = document.querySelector('.todo__create__name') as HTMLInputElement;
    this.contentCont = document.querySelector('.todo__create__content') as HTMLInputElement;
    this.selectOpt = document.querySelector('.todo__create__category') as HTMLSelectElement;
    this.ulTag = document.querySelector('.todo__body__items') as HTMLUListElement;
    this.todoChange = document.querySelector('.todo__item__change') as HTMLImageElement;
    this.archiveAllTodoBtn = document.querySelector('.icon-archive') as HTMLImageElement;
    this.deleteAllTodoBtn = document.querySelector('.icon-delete') as HTMLImageElement;
    this.ulArchiveNotes = document.querySelector('.archive__note__items') as HTMLUListElement;
    this.noteBodyItems = document.querySelector('.note__body__items') as HTMLUListElement;
    this.activeCounter = 0;
    this.activeArchive = 0;
    this.store = store;
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

  private resetValue(property: IReset) {
    const { inputVal, inputCount, selectVal } = property;
    inputVal.value = '';
    inputCount.value = '';
    selectVal.value = 'Task';
  }

  private createNotes(event: Event) {
    event.preventDefault();
    const name = this.contentName.value;
    const content = this.contentCont.value;
    const opt = this.selectOpt.value;
    const { category, img, state }: ISwitchCat = switchCategory(opt, this.store);
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

    const property: IReset = {
      inputVal: this.contentName,
      inputCount: this.contentCont,
      selectVal: this.selectOpt,
    };

    this.resetValue(property);

    const noteActObj = {
      categoryImg: todoValue.categoryImg,
      category: todoValue.category,
      counterActive: state,
    };

    if (state === 1) {
      const element = this.createNoteAct(noteActObj);
      this.noteBodyItems.insertAdjacentHTML('afterbegin', element);
    } else {
      const getNode = this.noteBodyItems.querySelectorAll('.note__item__name');
      getNode.forEach((element, index) => {
        if (element.innerHTML === todoValue.category) {
          const getNodeValue = this.noteBodyItems.querySelectorAll('.note__item__active')[
            index
          ] as HTMLInputElement;
          getNodeValue.textContent = String(Number(getNodeValue.textContent) + 1);
        }
      });
    }
  }

  private editTodo(event: Event) {
    const el = event.target as Element;
    if (el) {
      const element = el.closest('li');
      element?.classList.add('mode-edit');
    }
  }

  private deleteNode(event: Event) {
    const val = event.target as HTMLLIElement;
    const elementLi = val.closest('li');
    const category = elementLi?.querySelector('.todo__item__category')?.textContent;
    const nodeOfLi = document.querySelectorAll('.note__item');
    nodeOfLi.forEach((element) => {
      const nameEl = element.querySelector('.note__item__name');
      if (nameEl === category) {
        const acitvEl = element.querySelector('.note__item__active') as HTMLElement;
        acitvEl.textContent = String(Number(acitvEl?.textContent) - 1);
      }
    });
    elementLi?.remove();
  }

  private archiveTodo(event: Event) {
    const el = event.target as Element;
    if (el) {
      const element = el.closest('li');
      /*       this.checkerNode(element!); */
      this.ulArchiveNotes.insertAdjacentElement('afterbegin', element!);
    }
  }

  private deleteAllTodo() {
    const getAllTodo = document.querySelectorAll('.todo__item');
    const noteAllTodo = document.querySelectorAll('.note__item');
    if (getAllTodo.length !== 0 || noteAllTodo.length !== 0) {
      getAllTodo.forEach((elementTodo) => elementTodo.remove());
      noteAllTodo.forEach((elementNote) => elementNote.remove());
      Object.keys(this.store.storeAchive).forEach(
        (key) => (this.store.storeAchive[key as keyof typeof this.store.storeAchive] = 0)
      );
    }
  }

  private archiveAllTodo() {
    const getAllTodo = document.querySelectorAll('.todo__item');
    if (getAllTodo.length !== 0) {
      getAllTodo.forEach((elementTodo) =>
        this.ulArchiveNotes.insertAdjacentElement('afterbegin', elementTodo)
      );
    }
  }

  private createNoteAct(todoItem: {
    categoryImg: string;
    category: string;
    counterActive: number;
  }) {
    return `<li class="note__item">
        <div class="note__item__inner">
          <img src="${todoItem.categoryImg}" alt="status" class="todo__item__img" />
          <div class="note__item__name">${todoItem.category}</div>
        </div>
        <div class="note__item__active">${todoItem.counterActive}</div>
        <div class="note__item__archived">${0}</div>
      </li>`;
  }

  private getTodofunc() {
    const getEdit = document.querySelectorAll('.todo__item__change');
    const getArchive = document.querySelectorAll('.todo__item__archived');
    const getDelete = document.querySelectorAll('.todo__item__delete');

    getEdit.forEach((edit) => edit.addEventListener('click', this.editTodo.bind(this)));
    getArchive.forEach((archive) => archive.addEventListener('click', this.archiveTodo.bind(this)));
    getDelete.forEach((del) => del.addEventListener('click', this.deleteNode.bind(this)));
  }

  public rootMainPage() {
    this.visibleNotesBtn.addEventListener('click', this.visibleFormNotes.bind(this));
    this.createNoteBtn.addEventListener('click', this.createNotes.bind(this));
    this.deleteAllTodoBtn.addEventListener('click', this.deleteAllTodo.bind(this));
    this.archiveAllTodoBtn.addEventListener('click', this.archiveAllTodo.bind(this));

    const observer = new MutationObserver(this.getTodofunc.bind(this));
    observer.observe(this.ulTag, configObs);

    window.addEventListener('keypress', this.enterPress.bind(this));
  }
}
