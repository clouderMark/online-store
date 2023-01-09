import InputTmp from './inputTmp';
import {IItem} from '@/types/type';
import GetFilteredItem from '@/filtration/getFilteredItem';
import emptyPromise from '@/filtration/emptyPromise';

class Search extends InputTmp {
  static searchingValue: string = '';

  static products: Promise<IItem[]> = emptyPromise;

  static el: HTMLInputElement;

  constructor(parent: HTMLElement, nameClass: string) {
    super(parent, nameClass);

    this.start();
  }

  start() {
    this.element.addEventListener('input', () => {
      Search.searchingValue = this.element.value.toLowerCase();

      GetFilteredItem.getFilteredItem('search', Search.searchingValue);
    });

    this.element.placeholder = 'Search product';
    Search.el = this.element;
  }

  static async search(value: string, items: Promise<IItem[]>) {
    let products = Promise.all(await items);

    products = Promise.all((await products).filter((item) => this.searchSuitableItems(item, value)));

    return products;
  }

  static searchSuitableItems(item: IItem, value: string) {
    let result = false;

    if (item.title.toLowerCase().indexOf(value) >= 0) {
      result = true;
    } else if (item.brand.toLowerCase().indexOf(value) >= 0) {
      result = true;
    } else if (item.category.toLowerCase().indexOf(value) >= 0) {
      result = true;
    } else if (item.description.toLowerCase().indexOf(value) >= 0) {
      result = true;
    } else if (`${item.discountPercentage}`.indexOf(`${value}`) >= 0) {
      result = true;
    } else if (`${item.price}`.indexOf(`${value}`) >= 0) {
      result = true;
    } else if (`${item.rating}`.indexOf(`${value}`) >= 0) {
      result = true;
    } else if (`${item.stock}`.indexOf(`${value}`) >= 0) {
      result = true;
    }

    return result;
  }
}

export default Search;
