import GetFilteredItem from '../getFilteredItem';
import Search from '@/core/components/search/search';

export function searchFromQuery(value: string) {
  if (value.length > 0 && value !== 'undefined') {
    console.log(value);
    GetFilteredItem.getFilteredItem('search', value);
    Search.el.value = value;
    Search.searchingValue = value;
  }
}
