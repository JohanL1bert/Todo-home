export interface ITodo {
  categoryImg: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
}

export interface ISwitchCat {
  category: string;
  img: string;
  state: number;
}

export interface IReset {
  inputVal: HTMLInputElement;
  inputCount: HTMLInputElement;
  selectVal: HTMLSelectElement;
}

export interface IStore {
  storeAchive: {
    task: number;
    random: number;
    idea: number;
    quote: number;
  };
}
