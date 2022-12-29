import ProductList from '@/core/components/productList/productList';
import State from '@/state/state';
import {IItem} from '@/types/type';

const category: string[] = [];
const brand: string[] = [];
const price: number[] = [0, Infinity];

class GetFilteredItem {
  static selected: {[key: string]: Array<string | number>} = {category, brand, price};

  static filteredItems: Promise<IItem[]>;

  static async getFilteredItem(flag: string, selectedPoints: string | number) {
    if ((flag === 'category' || flag === 'brand') && typeof selectedPoints === 'string') {
      if (this.selected[flag].indexOf(selectedPoints.toLowerCase()) >= 0) {
        this.selected[flag].splice(this.selected[flag].indexOf(selectedPoints.toLowerCase()), 1);
      } else {
        this.selected[flag].push(selectedPoints.toLowerCase());
      }
    } else if (flag === 'minPrice' && typeof selectedPoints === 'number') {
      this.selected.price[0] = selectedPoints;
    } else if (flag === 'maxPrice' && typeof selectedPoints === 'number') {
      this.selected.price[1] = selectedPoints;
    }

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

    return selectedTypes === result;
  }
}

export default GetFilteredItem;
