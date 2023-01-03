import ProductList from '@/core/components/productList/productList';
import State from '@/state/state';
import {IItem} from '@/types/type';
import emptyPromise from './emptyPromise';
import {addOptions} from './addOptions';
import Select from '@/core/components/select/select';
import Search from '@/core/components/search/search';
import Found from '@/core/components/found/found';
import {checkAllItems} from './checkAllItems';

const category: string[] = [];
const brand: string[] = [];
const price: number[] = [0, Infinity];
const stock: number[] = [0, Infinity];

class GetFilteredItem {
  static selected: {[key: string]: Array<string | number>} = {category, brand, price, stock};

  static filteredItems: Promise<IItem[]> = emptyPromise;

  static async getFilteredItem(flag: string, selectedPoints: string | number) {
    addOptions(flag, selectedPoints, this.selected);

    const products: Promise<IItem[]> = await State.getProducts();

    this.filteredItems = Promise.all((await products).filter((item) => checkAllItems(item, this.selected)));
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
}

export default GetFilteredItem;
