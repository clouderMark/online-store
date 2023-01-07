export function getFromQuery(): {[key: string]: Array<string | number>} {
  const category: string[] = [];
  const brand: string[] = [];
  const price: number[] = [0, 999999];
  const stock: number[] = [0, 999999];
  const search: string[] = [];
  const sort: string[] = [];
  const selected: {[key: string]: Array<string | number>} = {category, brand, price, stock, search, sort};
  const url = window.location.toString();

  const urlForFilters = url.substring(url.indexOf('/?category') + 2);

  if (urlForFilters.indexOf('category') >= 0) {
    const arr = urlForFilters.split('&');
    const newArr = arr.map((el) => el.split('=')).filter((_, i) => i < 6);
    const regex = /%20/g;

    selected.category = newArr[0][1].split(',');
    selected.brand = newArr[1][1].replace(regex, ' ').split(',');
    selected.price = newArr[2][1].split(',').map((el) => +el);
    selected.stock = newArr[3][1].split(',').map((el) => +el);
    // eslint-disable-next-line
    selected.search[0] = newArr[4][1];
    // eslint-disable-next-line
    selected.sort[0] = newArr[5][1];
  }

  return selected;
}
