// const filters: string[] = [];
const search: string[] = [];
const sort: string[] = [];

export function addToQuery(flag: string, item: string | number, obj: {[key: string]: Array<string | number>}) {
  // filters.push(`${item}`);
  // console.log(obj);
  const newObj = JSON.parse(JSON.stringify(obj));

  if (flag === 'search' && typeof item === 'string') {
    search[0] = item;
  }

  if (flag === 'sort' && typeof item === 'string') {
    sort[0] = item;
  }

  newObj.search = search;
  newObj.sort = sort;
  let result = '';

  for (const el in newObj) {
    if (el) {
      result += `${el}=`;
      if (newObj[el].length === 0) result += '&';
      for (let r = 0; r < newObj[el].length; r++) {
        if (r !== newObj[el].length - 1) {
          result += `${newObj[el][r]},`;
        } else {
          result += `${newObj[el][r]}&`;
        }
      }
    }
  }

  window.history.pushState('object or string', 'Title', `?${result}`);
}
