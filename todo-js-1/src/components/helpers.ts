import shopImg from '../assets/shop.svg';
import randomImg from '../assets/random.svg';
import ideaImg from '../assets/idea.svg';
import quoteImg from '../assets/quotes.svg';

export const switchCategory = (category: string) => {
  switch (category) {
    case 'Task':
      return {
        category: 'Task',
        img: shopImg as string,
      };
    case 'Random Thought':
      return {
        category: 'Random Thought',
        img: randomImg as string,
      };
    case 'Idea':
      return {
        category: 'Idead',
        img: ideaImg as string,
      };
    default:
      return {
        category: 'Quote',
        img: quoteImg as string,
      };
  }
};

export const optionsDate = { month: 'long', year: 'numeric', day: 'numeric' } as const;
