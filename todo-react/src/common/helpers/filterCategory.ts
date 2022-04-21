import { todoHelpImg } from 'common/const/img.const';
import { regPattern } from 'common/helpers/config';

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
        category: 'Idea',
        img: todoHelpImg.idea,
      };
    default:
      return {
        category: 'Quote',
        img: todoHelpImg.quote,
      };
  }
};

export const parseContentData = (content: string) => {
  const findDates = content.match(regPattern);
  if (findDates !== null) {
    let strDate = '';
    findDates.forEach((element, index) => {
      if (findDates[index + 1] !== undefined) {
        strDate += `${element}, `;
      } else {
        strDate += element;
      }
    });
    return {
      contentText: content,
      dateContent: strDate,
    };
  }

  return {
    contentText: content,
    dateContent: '',
  };
};
