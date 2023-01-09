import {IItem} from '@/types/type';

export function checkAllItems(item: IItem, obj: {[key: string]: Array<string | number>}) {
  let selectedTypes = 0;
  let result = 0;

  for (const variable in obj) {
    if (obj[variable].length > 0) {
      selectedTypes++;
    }
  }

  for (const variable in obj) {
    if (variable === 'category' || variable === 'brand') {
      for (let i = 0; i < obj[variable].length; i++) {
        if (item[variable].toLowerCase() === obj[variable][i]) {
          result++;
        }
      }
    }
  }

  if (item.price >= obj.price[0] && item.price <= obj.price[1]) {
    result++;
  }

  if (item.stock >= obj.stock[0] && item.stock <= obj.stock[1]) {
    result++;
  }

  return selectedTypes === result;
}
