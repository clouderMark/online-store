import InputTmp from './inputTmp';
import {IItem} from '@/types/type';
import GetFilteredItem from '@/filtration/addOptionsByFilter';
import State from '@/state/state';
import ProductList from '../productList/productList';

class Search extends InputTmp {
  static searchingValue: string = '';

  constructor(parent: HTMLElement, nameClass: string) {
    super(parent, nameClass);

    this.start();
  }

  start() {
    this.element.addEventListener('input', () => {
      Search.searchingValue = this.element.value.toLowerCase();

      Search.search(Search.searchingValue);
    });
  }

  static async search(value: string) {
    let products: Promise<IItem[]> = Promise.all((await GetFilteredItem.filteredItems));

    if ((await products)[0].title === 'empty') {
      products = await State.getProducts();
      products = Promise.all(await products);
    }

    products = Promise.all((await products).filter((item) => this.searchSuitableItems(item, value)));

    ProductList.elem.textContent = '';
    ProductList.start(products);
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
