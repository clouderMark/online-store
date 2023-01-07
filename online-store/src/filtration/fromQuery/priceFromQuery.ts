import GetFilteredItem from '../getFilteredItem';
import MultiRange from '@/core/components/range/multeRange';

export function priceFromQuery(items: Array<string | number>): void {
  if (items[0] > 0) {
    const minValue = items[0];

    GetFilteredItem.getFilteredItem('minPrice', minValue);
    MultiRange.minPriceEl.value = `${minValue}`;
    MultiRange.minPrice.textContent = `${minValue} $`;
  }

  if (items[1] < 999999) {
    const maxValue = items[1];

    GetFilteredItem.getFilteredItem('maxPrice', maxValue);
    MultiRange.maxPriceEl.value = `${maxValue}`;
    MultiRange.maxPrice.textContent = `${maxValue} $`;
  }
}
