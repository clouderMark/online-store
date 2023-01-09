import Range from './range';
import Div from '../div/div';

export function doForMax(
  maxVal: string,
  rangeMax: Range,
  max: Div,
  postfix: string,
  rangeMin: Range,
) {
  maxVal = rangeMax.element.value;
  max.element.textContent = `${maxVal} ${postfix}`;
  rangeMax.element.value = maxVal;
  if (+rangeMax.element.value - 5 < +rangeMin.element.value) {
    rangeMax.element.value = `${+rangeMin.element.value - 5}`;
    max.element.textContent = rangeMax.element.value + postfix;
  }

  return maxVal;
}
