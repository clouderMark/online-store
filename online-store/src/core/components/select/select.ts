import SelectTmp from './selectTmp';
import GetFilteredItem from '@/filtration/addOptionsByFilter';
import ProductList from '../productList/productList';
import {IItem} from '@/types/type';
import State from '@/state/state';
import {createOptions} from './createOptions';
import {sortItems} from './sortItems';

class Select extends SelectTmp {
  static selectValue: string = '';

  constructor(parent: HTMLElement, tagClass: string) {
    super(parent, tagClass);
    this.start();
  }

  start() {
    createOptions(this.element);

    this.element.addEventListener('change', () => {
      const {value} = this.element;

      Select.selectValue = value;
      Select.sort(value);
    });
  }

  static async sort(value: string) {
    let products: Promise<IItem[]> = Promise.all((await GetFilteredItem.filteredItems));

    if ((await products)[0].title === 'empty') {
      products = await State.getProducts();
      products = Promise.all(await products);
    }

    sortItems(products, value);
    ProductList.elem.textContent = '';
    ProductList.start(products);
  }
}

export default Select;
