import './scss/style.scss';
import { MainPage } from './components/main-page';
import { store } from './components/helpers';

class Root {
  mainController: MainPage;
  constructor(mainController: MainPage) {
    this.mainController = mainController;
  }

  public play() {
    this.mainController.rootMainPage();
  }
}

const mainController = new MainPage(store);

const root = new Root(mainController);
root.play();
