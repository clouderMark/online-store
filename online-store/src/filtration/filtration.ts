import ProductList from '@/core/components/productList/productList';
import State from '@/state/state';
import {IItem} from '@/types/type';

const categories: string[] = [];

export async function filterByCategory(selectedPoints: string) {
  if (categories.indexOf(selectedPoints) >= 0) {
    categories.splice(categories.indexOf(selectedPoints), 1);
  } else {
    categories.push(selectedPoints);
  }

  ProductList.elem.textContent = '';
  const products: Promise<IItem[]> = await State.getProducts();
  const filteredItems = Promise.all((await products).filter((item) => useAllArrItems(item.category.toLowerCase())));

  ProductList.start((await filteredItems).length > 0 ? filteredItems : State.getProducts());
}

function useAllArrItems(value: string) {
  for (let i = 0; i < categories.length; i++) {
    if (value === categories[i]) {
      return true;
    }

    if (i === categories.length - 1) {
      return false;
    }
  }
}
