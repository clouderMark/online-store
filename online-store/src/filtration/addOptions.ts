export function addOptions(
  flag: string,
  option: string | number,
  obj: {[key: string]: Array<string | number>},
) {
  if ((flag === 'category' || flag === 'brand') && typeof option === 'string') {
    if (!obj[flag].includes(option.toLowerCase())) obj[flag].push(option.toLowerCase());
  } else if (flag === 'minPrice' && typeof option === 'number') {
    obj.price[0] = option;
  } else if (flag === 'maxPrice' && typeof option === 'number') {
    obj.price[1] = option;
  } else if (flag === 'minStock' && typeof option === 'number') {
    obj.stock[0] = option;
  } else if (flag === 'maxStock' && typeof option === 'number') {
    obj.stock[1] = option;
  }
}
