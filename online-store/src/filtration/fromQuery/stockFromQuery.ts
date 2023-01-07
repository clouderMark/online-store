import GetFilteredItem from '../getFilteredItem';
import MultiRange from '@/core/components/range/multeRange';

export function stockFromQuery(items: Array<string | number>) {
  if (items[0] > 0) {
    const minStock = items[0];

    GetFilteredItem.getFilteredItem('minStock', minStock);
    MultiRange.minSrockEl.value = `${minStock}`;
    MultiRange.minStock.textContent = `${minStock}`;
  }

  if (items[1] < 999999) {
    const maxStock = items[1];

    GetFilteredItem.getFilteredItem('maxStock', maxStock);
    MultiRange.maxSrockEl.value = `${maxStock}`;
    MultiRange.maxStock.textContent = `${maxStock}`;
  }
}
