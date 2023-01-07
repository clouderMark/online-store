import {getFromQuery} from '@/filtration/fromQuery/getFromQuery';
import GetFilteredItem from '../getFilteredItem';
import State from '@/state/state';
import {priceFromQuery} from './priceFromQuery';
import {selectSortFromQuery} from './selectSortFromQuery';
import {stockFromQuery} from './stockFromQuery';
import {searchFromQuery} from './searchFromQuery';
import Chbx from '@/core/components/checkbox/checkbox';

async function getBrands() {
  const existBrands = Array.from(await State.getBrands());

  return existBrands;
}

async function getCategories() {
  const existCategories = Array.from(await State.getCategories());

  return existCategories;
}

export async function addFiltersFromQuery() {
  const filters: {[key: string]: Array<string | number>} = getFromQuery();
  // eslint-disable-next-line
  const {brand, category, sort, price, stock, search} = filters;

  Chbx.checked = brand.concat(category);
  for (const item of brand) {
    let name;

    if (typeof item === 'string') {
      name = item.charAt(0).toUpperCase() + item.slice(1);
    }

    if ((await getBrands()).includes(`${name}`)) {
      GetFilteredItem.getFilteredItem('brand', `${item}`.toUpperCase());
    }
  }

  for (const item of category) {
    if ((await getCategories()).includes(`${item}`)) {
      GetFilteredItem.getFilteredItem('category', item);
    }
  }

  selectSortFromQuery(sort);

  priceFromQuery(price);

  stockFromQuery(stock);

  searchFromQuery(`${search[0]}`);
}
