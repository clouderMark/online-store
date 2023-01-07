import {getFromQuery} from '@/filtration/fromQuery/getFromQuery';
import Select from '../select/select';
import Search from '../search/search';
import ProductList from '../productList/productList';
import MultiRange from '../range/multeRange';
import GetFilteredItem from '@/filtration/getFilteredItem';
import Found from '../found/found';
import State from '@/state/state';

export async function actionForReset() {
  const products = State.getProducts();
  const productsLength = (await Promise.all(await products)).length;
  const prices = await State.getMinMaxPrice();
  const stock = await State.getMinMaxStock();
  const url = window.location.href;
  const positionFrom = url.indexOf('/?category');
  const {brand, category} = getFromQuery();
  const cleanUrl = url.slice(0, positionFrom);

  category.concat(brand).filter((el) => el !== '').forEach((el) => {
    const checkbox = <HTMLInputElement>document.getElementById(`${el}`);

    checkbox!.checked = false;
  });
  window.history.pushState('object or string', 'Title', cleanUrl);
  Select.el.value = 'sortOptions';
  Select.selectValue = '';
  Search.el.value = '';
  Search.searchingValue = '';
  ProductList.elem.textContent = '';
  MultiRange.minPriceEl.value = '0';
  MultiRange.minPrice.textContent = `${prices.min} $`;
  MultiRange.maxPriceEl.value = '999999';
  MultiRange.maxPrice.textContent = `${prices.max} $`;
  MultiRange.minSrockEl.value = '0';
  MultiRange.minStock.textContent = `${stock.min}`;
  MultiRange.maxSrockEl.value = '999999';
  MultiRange.maxStock.textContent = `${stock.max}`;
  GetFilteredItem.selected.category = [];
  GetFilteredItem.selected.brand = [];
  GetFilteredItem.selected.price = [0, 999999];
  GetFilteredItem.selected.stock = [0, 999999];
  ProductList.start(products);
  Found.fromFilter(productsLength);
}
