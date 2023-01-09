export function checkHash(str: string) {
  const strArr = str.split('-');
  const page = strArr[0] === 'page';
  const item = strArr[1] === 'item';
  const itemId = +strArr[2] >= 0 && +strArr[2] <= 100;

  return page && item && itemId;
}
