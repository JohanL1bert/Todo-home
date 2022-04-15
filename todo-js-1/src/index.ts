import './scss/style.scss';
import { MainPage } from './components/main-page';

class Root {
  mainController: MainPage;
  constructor(mainController: MainPage) {
    this.mainController = mainController;
  }

  public play() {
    this.mainController.rootMainPage();
  }
}

const mainController = new MainPage();

const root = new Root(mainController);
root.play();
