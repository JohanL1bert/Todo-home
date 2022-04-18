import { IStoreTodo, IActiveTodo, IActiveNote } from './interfaces';
import { optionsDate, todoHelpImg, regPattern, switchCategory } from './helpers';
import { StateManager } from './state';

export class MainPage {
  todoForm: HTMLFormElement;
  visibleNotesBtn: HTMLButtonElement;
  createNoteBtn: HTMLButtonElement;
  contentName: HTMLInputElement;
  contentCont: HTMLInputElement;
  selectOpt: HTMLSelectElement;
  todoBodyItems: HTMLUListElement;
  todoChange: HTMLImageElement;
  archiveAllTodoBtn: HTMLImageElement;
  deleteAllTodoBtn: HTMLImageElement;
  ulArchiveNotes: HTMLUListElement;
  noteBodyItems: HTMLUListElement;
  store: StateManager;
  toggleArchive: boolean;
  constructor(store: StateManager) {
    this.visibleNotesBtn = document.querySelector('.todo__create__visible') as HTMLButtonElement;
    this.todoForm = document.querySelector('.todo__create__form') as HTMLFormElement;
    this.createNoteBtn = document.querySelector('.todo__create__btn') as HTMLButtonElement;
    this.contentName = document.querySelector('.todo__create__name') as HTMLInputElement;
    this.contentCont = document.querySelector('.todo__create__content') as HTMLInputElement;
    this.selectOpt = document.querySelector('.todo__create__category') as HTMLSelectElement;
    this.todoBodyItems = document.querySelector('.todo__body__items') as HTMLUListElement;
    this.todoChange = document.querySelector('.todo__item__change') as HTMLImageElement;
    this.archiveAllTodoBtn = document.querySelector('.icon-archive') as HTMLImageElement;
    this.deleteAllTodoBtn = document.querySelector('.icon-delete') as HTMLImageElement;
    this.ulArchiveNotes = document.querySelector('.archive__note__items') as HTMLUListElement;
    this.noteBodyItems = document.querySelector('.note__body__items') as HTMLUListElement;
    this.store = store;
    this.toggleArchive = false;
  }

  public enterPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  private visibleFormNotes() {
    this.todoForm.classList.add('mode-visible');
  }

  private createTodo(todo: IStoreTodo) {
    return `
      <li class="todo__item" data-todo="${todo.id}">
      <div class="todo__item__name__inner">
        <img src="${todo.todoImg}" alt="status" class="todo__item__img" />
        <label class="todo__item__name" for="todo-input"> ${todo.todoName} </label>
        <input type="text" id="todo-input" class="todo__item__name-input" />
      </div>
      <div class="todo__item__created">${todo.todoCreated}</div>
      <div class="todo__item__category">${todo.todoCategory}</div>
      <div class="todo__item__content">${todo.todoContent}</div>
      <div class="todo__item__dates">${todo.todoDates}</div>
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

  private createNoteAct(todoItem: IActiveNote) {
    return `<li class="note__item">
        <div class="note__item__inner">
          <img src="${todoItem.img}" alt="status" class="todo__item__img" />
          <div class="note__item__name">${todoItem.name}</div>
        </div>
        <div class="note__item__active">${todoItem.active}</div>
        <div class="note__item__archived">${todoItem.archive}</div>
      </li>`;
  }

  private creatNoteArchive(archive: IStoreTodo) {
    return `<li class="archive__item" data-todo="${archive.id}">
    <div class="archive__item__name__inner">
      <img src="${archive.todoImg}" alt="status" class="archive__item__img" />
      <label class="archive__item__name" for="todo-input"> ${archive.todoName} </label>
    </div>
    <div class="archive__item__created">${archive.todoCreated}</div>
    <div class="archive__item__category">${archive.todoCategory}</div>
    <div class="archive__item__content">${archive.todoContent}</div>
    <div class="archive__item__dates">${archive.todoDates}</div>
    <div class="archive__item__func">
      <img
        src="${todoHelpImg.arhcive}"
        alt="archive icon"
        class="archive__item__archived"
      />
      <img
        src="${todoHelpImg.delete}"
        alt="delete todo"
        class="archive__item__delete"
      />
    </div>
  </li>`;
  }

  private replaceAllHtml() {
    this.todoBodyItems.replaceChildren();
    this.ulArchiveNotes.replaceChildren();
    this.noteBodyItems.replaceChildren();
  }

  private editBtn(event: Event) {
    const element = event.target as HTMLElement;
    const getLiElement = element.closest('li');
    getLiElement?.classList.add('mode-edit');
    const inputHtml = getLiElement?.querySelector('input') as HTMLInputElement;

    if (element.classList.contains('edit-img')) {
      const inputValue = inputHtml.value;
      const getId = Number(getLiElement?.dataset.todo);
      const newStore = this.store.store.map((el) => {
        if (el.id === getId) {
          el.todoName = inputValue;
        }
        return el;
      });

      this.store.store = newStore;

      element.classList.remove('edit-img');
      getLiElement?.classList.remove('mode-edit');

      this.replaceAllHtml();
      this.init();
    } else {
      element.classList.add('edit-img');
    }
  }

  private archiveBtn(event: Event) {
    const htmlEl = event.target as HTMLElement;
    const liEl = htmlEl.closest('li');
    const getId = liEl?.dataset.todo;

    const newStore = this.store.store.map((el) => {
      if (el.id === Number(getId)) {
        el.active = false;
        el.archive = true;
      }
      return el;
    });

    this.store.store = newStore;
    this.replaceAllHtml();
    this.init();
  }

  private deleteBtn(event: Event) {
    const htmlEl = event.target as HTMLElement;
    const liEl = htmlEl?.closest('li');
    const getId = liEl?.dataset.todo;
    const newStore = this.store.store.filter((el) => el.id !== Number(getId));

    this.store.store = newStore;

    this.replaceAllHtml();
    this.init();
  }

  private unArchiveBtn(event: Event) {
    const getLi = document.querySelectorAll('.archive__item');
    if (getLi.length === 1) {
      this.archiveAllTodoBtn.classList.remove('mode-archive');
    }

    const htmlEl = event.target as HTMLElement;
    const liEl = htmlEl.closest('li');
    const getId = liEl?.dataset.todo;

    const newStore = this.store.store.map((el) => {
      if (el.id === Number(getId)) {
        el.active = true;
        el.archive = false;
      }
      return el;
    });

    this.store.store = newStore;

    this.replaceAllHtml();
    this.init();
  }

  private gelAllListener() {
    const getTodoEdit = document.querySelectorAll('.todo__item__change');
    const getTodoArchive = document.querySelectorAll('.todo__item__archived');
    const getTodoDelete = document.querySelectorAll('.todo__item__delete');
    const getArchiveUn = document.querySelectorAll('.archive__item__archived');
    const getArchiveDelete = document.querySelectorAll('.archive__item__delete');

    getTodoArchive.forEach((element) =>
      element.addEventListener('click', this.archiveBtn.bind(this))
    );

    getTodoDelete.forEach((element) =>
      element.addEventListener('click', this.deleteBtn.bind(this))
    );

    getArchiveDelete.forEach((element) =>
      element.addEventListener('click', this.deleteBtn.bind(this))
    );

    getArchiveUn.forEach((element) =>
      element.addEventListener('click', this.unArchiveBtn.bind(this))
    );

    getTodoEdit.forEach((element) => element.addEventListener('click', this.editBtn.bind(this)));
  }

  private deleteAllTodos() {
    this.store.store.splice(0, this.store.store.length);

    this.replaceAllHtml();
    this.init();
  }

  private archiveAllTodos(event: Event) {
    this.toggleArchive = !this.toggleArchive;

    const element = event.target as HTMLImageElement;

    if (this.toggleArchive) {
      element.classList.add('mode-archive');

      this.store.store.forEach((element) => {
        (element.active = false), (element.archive = true);
      });
    } else {
      element.classList.remove('mode-archive');

      this.store.store.forEach((element) => {
        (element.active = true), (element.archive = false);
      });
    }

    this.replaceAllHtml();
    this.init();
  }

  private categoryActiveFilter(todo: Array<IStoreTodo>) {
    const ActiveTodo: IActiveTodo = {
      task: {
        active: 0,
        archive: 0,
      },
      random: {
        active: 0,
        archive: 0,
      },
      idea: {
        active: 0,
        archive: 0,
      },
      quote: {
        active: 0,
        archive: 0,
      },
    };

    todo.map((element) => {
      if (element.todoCategory === 'Task') {
        element.active ? (ActiveTodo.task.active += 1) : (ActiveTodo.task.archive += 1);

        ActiveTodo.task.name = element.todoCategory;
        ActiveTodo.task.img = element.todoImg;
      }
      if (element.todoCategory === 'Random Thought') {
        element.active ? (ActiveTodo.random.active += 1) : (ActiveTodo.random.archive += 1);

        ActiveTodo.random.name = element.todoCategory;
        ActiveTodo.random.img = element.todoImg;
      }
      if (element.todoCategory === 'Idea') {
        element.active ? (ActiveTodo.idea.active += 1) : (ActiveTodo.idea.archive += 1);

        ActiveTodo.idea.name = element.todoCategory;
        ActiveTodo.idea.img = element.todoImg;
      }
      if (element.todoCategory === 'Quote') {
        element.active ? (ActiveTodo.quote.active += 1) : (ActiveTodo.quote.archive += 1);

        ActiveTodo.quote.name = element.todoCategory;
        ActiveTodo.quote.img = element.todoImg;
      }
    });

    return ActiveTodo;
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

  private createNotes(event: Event) {
    event.preventDefault();
    const name = this.contentName.value;
    const content = this.contentCont.value;
    const opt = this.selectOpt.value;

    const getLen = this.store.store.length + 1;

    const { category, img } = switchCategory(opt);

    const dateObj = new Date();
    const date = dateObj.toLocaleDateString('en-Us', optionsDate);
    const { contentText, dateContent } = this.parseContentDates(content);

    const createNewObj = {
      id: getLen,
      todoImg: `${img}`,
      todoName: name,
      todoCreated: date,
      todoCategory: category,
      todoContent: contentText,
      todoDates: dateContent,
      active: true,
      archive: false,
    };

    this.store.store.push(createNewObj);
    this.contentName.value = '';
    this.contentCont.value = '';
    this.selectOpt.value = 'Task';

    this.todoForm.classList.remove('mode-visible');
    this.replaceAllHtml();
    this.init();
  }

  private init() {
    //Render todo list
    const htmlRender = this.store.store
      .filter((storeELement) => storeELement.active === true)
      .map((element) => this.createTodo(element));
    htmlRender.map((element) => this.todoBodyItems.insertAdjacentHTML('afterbegin', element));

    //render and filter active notes

    const htmlActive = this.categoryActiveFilter(this.store.store);
    const arrActive = Object.keys(htmlActive).map((key) => htmlActive[key as keyof IActiveTodo]);
    const activeNote = arrActive
      .filter((element) => element.active > 0 || element.archive > 0)
      .sort((a, b) => Number(a.active) - Number(b.active)) as unknown as IActiveNote[];

    const htmlActiveNote = activeNote.map((el) => this.createNoteAct(el));
    htmlActiveNote.map((element) => this.noteBodyItems.insertAdjacentHTML('afterbegin', element));

    //archive filter and render
    const filterActive = this.store.store.filter((storeElement) => storeElement.archive === true);
    const getArchiveNotes = filterActive.map((element) => this.creatNoteArchive(element));
    getArchiveNotes.map((element) => this.ulArchiveNotes.insertAdjacentHTML('afterbegin', element));

    this.gelAllListener();
  }

  public rootMainPage() {
    this.init();
    this.visibleNotesBtn.addEventListener('click', this.visibleFormNotes.bind(this));
    this.createNoteBtn.addEventListener('click', this.createNotes.bind(this));
    this.deleteAllTodoBtn.addEventListener('click', this.deleteAllTodos.bind(this));
    this.archiveAllTodoBtn.addEventListener('click', this.archiveAllTodos.bind(this));

    window.addEventListener('keypress', this.enterPress.bind(this));
  }
}
