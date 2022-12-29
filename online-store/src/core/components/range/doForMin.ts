import Range from './range';
import Div from '../div/div';

export function doForMin(
  minVal: string,
  rangeMin: Range,
  min: Div,
  postfix: string,
  rangeMax: Range,
) {
  minVal = rangeMin.element.value;
  min.element.textContent = `${minVal}${postfix}`;
  rangeMin.element.value = minVal;
  if (+rangeMin.element.value > +rangeMax.element.value - 5) {
    rangeMin.element.value = `${+rangeMax.element.value - 5}`;
    min.element.textContent = rangeMin.element.value + postfix;
  }

  return minVal;
}
