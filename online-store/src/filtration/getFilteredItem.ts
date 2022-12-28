import ProductList from '@/core/components/productList/productList';
import State from '@/state/state';
import {IItem} from '@/types/type';

const category: Array<string> = [];
const brand: Array<string> = [];
const selected: {[key: string]: Array<string>} = {category, brand};

export async function getFilteredItem(flag: 'category' | 'brand', selectedPoints: string) {
  if (selected[flag].indexOf(selectedPoints.toLowerCase()) >= 0) {
    selected[flag].splice(selected[flag].indexOf(selectedPoints.toLowerCase()), 1);
  } else {
    selected[flag].push(selectedPoints.toLowerCase());
  }

  ProductList.elem.textContent = '';
  const products: Promise<IItem[]> = await State.getProducts();
  const filteredItems = Promise.all((await products).filter((item) => checkAllItems(item)));

  ProductList.start((filteredItems));
  // ProductList.start((await filteredItems).length > 0 ? filteredItems : State.getProducts());
}

function checkAllItems(item: IItem) {
  let selectedTypes = 0;

  for (const variable in selected) {
    if (selected[variable].length > 0) {
      selectedTypes++;
    }
  }

  let result = 0;

  for (const variable in selected) {
    if (variable === 'category' || variable === 'brand') {
      for (let i = 0; i < selected[variable].length; i++) {
        if (item[variable].toLowerCase() === selected[variable][i]) {
          result++;
        }
      }
    }
  }

  return selectedTypes === result;
}
