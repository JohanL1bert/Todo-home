import './scss/style.scss';
import { MainPage } from './components/main-page';
import { SingletonReproducer } from './components/state';

class Root {
  mainController: MainPage;
  constructor(mainController: MainPage) {
    this.mainController = mainController;
  }

  public play() {
    this.mainController.rootMainPage();
  }
}

const getInstanceOfStateManager = SingletonReproducer.getInstance();

const mainController = new MainPage(getInstanceOfStateManager);

const root = new Root(mainController);
root.play();
