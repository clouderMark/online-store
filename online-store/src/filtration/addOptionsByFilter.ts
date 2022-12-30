import ProductList from '@/core/components/productList/productList';
import State from '@/state/state';
import {IItem} from '@/types/type';
import emptyPromise from './emptyPromise';
import {addOptionsByFilter} from './addFilterOptions';

const category: string[] = [];
const brand: string[] = [];
const price: number[] = [0, Infinity];
const stock: number[] = [0, Infinity];

class GetFilteredItem {
  static selected: {[key: string]: Array<string | number>} = {category, brand, price, stock};

  static filteredItems: Promise<IItem[]> = emptyPromise;

  static async getFilteredItem(flag: string, selectedPoints: string | number) {
    addOptionsByFilter(flag, selectedPoints, this.selected);

    ProductList.elem.textContent = '';
    const products: Promise<IItem[]> = await State.getProducts();

    this.filteredItems = Promise.all((await products).filter((item) => this.checkAllItems(item)));
    ProductList.start(this.filteredItems);
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
