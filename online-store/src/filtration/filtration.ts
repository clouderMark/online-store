import ProductList from '@/core/components/productList/productList';
import State from '@/state/state';
import {IItem} from '@/types/type';

const categories: string[] = [];

export async function filterByCategory(point: string) {
  categories.push(point);
  ProductList.elem.textContent = '';
  const products: Promise<IItem[]> = await State.getProducts();

  console.log(categories);
  const filteredItems = Array.from(await products).filter((item) => useAllArrItems(item.category.toLowerCase()));

  console.log(filteredItems);
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
