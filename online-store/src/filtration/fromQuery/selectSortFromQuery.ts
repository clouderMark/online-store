import GetFilteredItem from '../getFilteredItem';
import Select from '@/core/components/select/select';

export function selectSortFromQuery(sort: Array<string | number>): void {
  if (sort[0] === 'priceASC'
    || sort[0] === 'priceDESC'
    || sort[0] === 'ratingASC'
    || sort[0] === 'ratingDESC'
    || sort[0] === 'discountASC'
    || sort[0] === 'discountDESC'
    || sort[0] === 'inStockASC'
    || sort[0] === 'inStockDESC'
  ) {
    const item = sort[0];

    GetFilteredItem.getFilteredItem('sort', item);
    Select.el.value = item;
    Select.selectValue = item;
  }
}
