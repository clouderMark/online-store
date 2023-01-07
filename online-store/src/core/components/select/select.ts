import SelectTmp from './selectTmp';
import GetFilteredItem from '@/filtration/getFilteredItem';
import {createOptions} from './createOptions';
import {sortItems} from './sortItems';
import {IItem} from '@/types/type';

class Select extends SelectTmp {
  static selectValue: string = '';

  static el: HTMLSelectElement;

  constructor(parent: HTMLElement, tagClass: string) {
    super(parent, tagClass);
    Select.el = this.element;
    this.start();
  }

  start() {
    createOptions(this.element);

    this.element.addEventListener('change', () => {
      const {value} = this.element;

      GetFilteredItem.getFilteredItem('sort', value);

      Select.selectValue = value;
    });
  }

  static async sort(value: string, items: Promise<IItem[]>) {
    const products = Promise.all(await items);

    sortItems(products, value);

    return products;
  }
}

export default Select;
