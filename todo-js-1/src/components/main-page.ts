export class MainPage {
  todoForm: HTMLFormElement;
  visibleNotesBtn: HTMLButtonElement;
  createNoteBtn: HTMLButtonElement;
  constructor() {
    this.visibleNotesBtn = document.querySelector('.todo__create__visible') as HTMLButtonElement;
    this.todoForm = document.querySelector('.todo__create__form') as HTMLFormElement;
    this.createNoteBtn = document.querySelector('.todo__create__visible') as HTMLButtonElement;
  }

  private visibleFormNotes() {
    this.todoForm.classList.add('mode-visible');
  }

  private createNotes(event: Event) {
    event.preventDefault();

    this.todoForm.classList.remove('mode-visible');
  }

  public rootMainPage() {
    this.visibleNotesBtn.addEventListener('click', this.visibleFormNotes.bind(this));
    this.todoForm.addEventListener('click', this.createNotes.bind(this));
  }
}
