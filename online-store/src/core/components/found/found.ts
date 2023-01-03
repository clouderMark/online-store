import Div from '../div/div';
import {IItem} from '@/types/type';
import GetFilteredItem from '@/filtration/getFilteredItem';
import State from '@/state/state';

class Found extends Div {
  static elem: HTMLElement;

  constructor(parent: HTMLElement, tagClass: string) {
    super(parent, tagClass);
    Found.elem = this.element;
    this.start();
  }

  async start() {
    Found.elem.textContent = `Found: ${await this.getAmount()}`;
  }

  async getAmount() {
    let products: Promise<IItem[]> = Promise.all((await GetFilteredItem.filteredItems));

    if ((await products)[0].title === 'empty') {
      products = await State.getProducts();
      products = Promise.all(await products);
    }

    return (await products).length;
  }

  static fromFilter(a: number) {
    Found.elem.textContent = `Found: ${a}`;
  }
}

export default Found;
