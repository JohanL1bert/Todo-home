import shopImg from '../assets/shop.svg';
import randomImg from '../assets/random.svg';
import ideaImg from '../assets/idea.svg';
import quoteImg from '../assets/quotes.svg';
import editImg from '../assets/edit.svg';
import archiveImg from '../assets/archive.svg';
import deleteImg from '../assets/delete.svg';

export const switchCategory = (category: string) => {
  switch (category) {
    case 'Task':
      return {
        category: 'Task',
        img: todoHelpImg.shop,
      };
    case 'Random Thought':
      return {
        category: 'Random Thought',
        img: todoHelpImg.random,
      };
    case 'Idea':
      return {
        category: 'Idead',
        img: todoHelpImg.idea,
      };
    default:
      return {
        category: 'Quote',
        img: todoHelpImg.quote,
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
