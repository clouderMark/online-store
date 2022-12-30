import SelectTmp from './selectTmp';
import GetFilteredItem from '@/filtration/addOptionsByFilter';
import ProductList from '../productList/productList';
import {IItem} from '@/types/type';
import State from '@/state/state';

class Select extends SelectTmp {
  constructor(parent: HTMLElement, tagClass: string) {
    super(parent, tagClass);
    this.start();
  }

  start() {
    const sortOptions = new Option('Sort Options');
    const sortByPriceA = new Option('Sort by price ASC', 'priceASC');
    const sortByPriceD = new Option('Sort by price DESC', 'priceDESC');
    const sortByRatingA = new Option('Sort by rating ASC', 'ratingASC');
    const sortByRatingD = new Option('Sort by rating DESC', 'ratingDESC');
    const sortByDiscountA = new Option('Sort by discount ASC', 'discountASC');
    const sortByDiscountD = new Option('Sort by discount DESC', 'discountDESC');
    const sortByInStockA = new Option('Sort by in stock ASC', 'inStockASC');
    const sortByInStockD = new Option('Sort by in stock DESC', 'inStockDESC');

    sortOptions.disabled = true;
    sortOptions.selected = true;

    this.element.addEventListener('change', () => {
      const {value} = this.element;

      this.sort(value);
    });

    this.element.append(
      sortOptions,
      sortByPriceA,
      sortByPriceD,
      sortByRatingA,
      sortByRatingD,
      sortByDiscountA,
      sortByDiscountD,
      sortByInStockA,
      sortByInStockD,
    );
  }

  async sort(value: string) {
    let products: Promise<IItem[]> = Promise.all((await GetFilteredItem.filteredItems));

    if ((await products)[0].title === 'empty') {
      products = await State.getProducts();
      products = Promise.all(await products);
    }

    if (value === 'priceASC') {
      (await products).sort((a, b) => a.price - b.price);
    } else if (value === 'priceDESC') {
      (await products).sort((a, b) => b.price - a.price);
    } else if (value === 'ratingASC') {
      (await products).sort((a, b) => a.rating - b.rating);
    } else if (value === 'ratingDESC') {
      (await products).sort((a, b) => b.rating - a.rating);
    } else if (value === 'discountASC') {
      (await products).sort((a, b) => a.discountPercentage - b.discountPercentage);
    } else if (value === 'discountDESC') {
      (await products).sort((a, b) => b.discountPercentage - a.discountPercentage);
    } else if (value === 'inStockASC') {
      (await products).sort((a, b) => a.stock - b.stock);
    } else if (value === 'inStockDESC') {
      (await products).sort((a, b) => b.stock - a.stock);
    }

    ProductList.elem.textContent = '';
    ProductList.start(products);
  }
}

export default Select;
