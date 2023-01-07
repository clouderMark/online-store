export function createOptions(elem: HTMLSelectElement) {
  const sortOptions = new Option('Sort Options', 'sortOptions');
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

  elem.append(
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
