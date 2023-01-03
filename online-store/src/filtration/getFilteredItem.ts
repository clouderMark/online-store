import ProductList from '@/core/components/productList/productList';
import State from '@/state/state';
import {IItem} from '@/types/type';
import emptyPromise from './emptyPromise';
import {addOptions} from './addOptions';
import Select from '@/core/components/select/select';
import Search from '@/core/components/search/search';
import Found from '@/core/components/found/found';

const category: string[] = [];
const brand: string[] = [];
const price: number[] = [0, Infinity];
const stock: number[] = [0, Infinity];

class GetFilteredItem {
  static selected: {[key: string]: Array<string | number>} = {category, brand, price, stock};

  static filteredItems: Promise<IItem[]> = emptyPromise;

  static async getFilteredItem(flag: string, selectedPoints: string | number) {
    addOptions(flag, selectedPoints, this.selected);

    ProductList.elem.textContent = '';
    const products: Promise<IItem[]> = await State.getProducts();

    this.filteredItems = Promise.all((await products).filter((item) => this.checkAllItems(item)));
    if (flag === 'search' && typeof selectedPoints === 'string') {
      this.filteredItems = Search.search(selectedPoints, this.filteredItems);
    } else {
      this.filteredItems = Search.search(Search.searchingValue, this.filteredItems);
    }

    if (flag === 'sort' && typeof selectedPoints === 'string') {
      this.filteredItems = Select.sort(selectedPoints, this.filteredItems);
    } else {
      this.filteredItems = Select.sort(Select.selectValue, this.filteredItems);
    }

    ProductList.elem.textContent = '';
    ProductList.start(this.filteredItems);

    Found.fromFilter((await this.filteredItems).length);
  }

  static checkAllItems(item: IItem) {
    let selectedTypes = 0;
    let result = 0;

    for (const variable in this.selected) {
      if (this.selected[variable].length > 0) {
        selectedTypes++;
      }
    }

    for (const variable in this.selected) {
      if (variable === 'category' || variable === 'brand') {
        for (let i = 0; i < this.selected[variable].length; i++) {
          if (item[variable].toLowerCase() === this.selected[variable][i]) {
            result++;
          }
        }
      }
    }

    if (item.price >= this.selected.price[0] && item.price <= this.selected.price[1]) {
      result++;
    }

    if (item.stock >= this.selected.stock[0] && item.stock <= this.selected.stock[1]) {
      result++;
    }

    return selectedTypes === result;
  }
}

export default GetFilteredItem;
