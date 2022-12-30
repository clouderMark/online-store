import {IItem} from '@/types/type';

export async function sortItems(items: Promise<IItem[]>, option: string) {
  if (option === 'priceASC') {
    (await items).sort((a, b) => a.price - b.price);
  } else if (option === 'priceDESC') {
    (await items).sort((a, b) => b.price - a.price);
  } else if (option === 'ratingASC') {
    (await items).sort((a, b) => a.rating - b.rating);
  } else if (option === 'ratingDESC') {
    (await items).sort((a, b) => b.rating - a.rating);
  } else if (option === 'discountASC') {
    (await items).sort((a, b) => a.discountPercentage - b.discountPercentage);
  } else if (option === 'discountDESC') {
    (await items).sort((a, b) => b.discountPercentage - a.discountPercentage);
  } else if (option === 'inStockASC') {
    (await items).sort((a, b) => a.stock - b.stock);
  } else if (option === 'inStockDESC') {
    (await items).sort((a, b) => b.stock - a.stock);
  }
}
