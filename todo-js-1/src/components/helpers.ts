import shopImg from '../assets/shop.svg';
import randomImg from '../assets/random.svg';
import ideaImg from '../assets/idea.svg';
import quoteImg from '../assets/quotes.svg';
import editImg from '../assets/edit.svg';
import archiveImg from '../assets/archive.svg';
import deleteImg from '../assets/delete.svg';
import { IStore } from './interfaces';

export const switchCategory = (category: string, store: IStore) => {
  switch (category) {
    case 'Task':
      return {
        category: 'Task',
        img: todoHelpImg.shop,
        state: (store.storeAchive.task += 1),
      };
    case 'Random Thought':
      return {
        category: 'Random Thought',
        img: todoHelpImg.random,
        state: (store.storeAchive.random += 1),
      };
    case 'Idea':
      return {
        category: 'Idea',
        img: todoHelpImg.idea,
        state: (store.storeAchive.idea += 1),
      };
    default:
      return {
        category: 'Quote',
        img: todoHelpImg.quote,
        state: (store.storeAchive.quote += 1),
      };
  }
};

export const optionsDate = { month: 'long', year: 'numeric', day: 'numeric' } as const;

export const todoHelpImg = {
  shop: shopImg as string,
  random: randomImg as string,
  idea: ideaImg as string,
  quote: quoteImg as string,
  edit: editImg as string,
  arhcive: archiveImg as string,
  delete: deleteImg as string,
};

export const regPattern = /[0-9]{1,}\/[0-9]{1,}\/[0-9]{4}/g;

export const configObs = { attributes: false, childList: true, subtree: true };

export const store = {
  storeAchive: {
    task: 0,
    random: 0,
    idea: 0,
    quote: 0,
  },
};
