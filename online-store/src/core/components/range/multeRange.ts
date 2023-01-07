import Div from '../div/div';
import Range from '@/core/components/range/range';
import GetFilteredItem from '@/filtration/getFilteredItem';
import {doForMin} from './doForMin';
import {doForMax} from './doForMax';

class MultiRange extends Div {
  title: string;

  static minPriceEl: HTMLInputElement;

  static maxPriceEl: HTMLInputElement;

  static minSrockEl: HTMLInputElement;

  static maxSrockEl: HTMLInputElement;

  static minPrice: HTMLElement;

  static maxPrice: HTMLElement;

  static minStock: HTMLElement;

  static maxStock: HTMLElement;

  constructor(parent: HTMLElement, title: string, value: Promise<{min: number, max: number}>) {
    super(parent, 'multirange');
    this.title = title;
    this.start(value);
  }

  async start(minMax: Promise<{min: number, max: number}>) {
    const postfix = ` ${this.title === 'price' ? '$' : ''}`;
    const title = new Div(this.element, 'multirange__title');
    const rangeMin = new Range(this.element, 'min', {
      type: 'range',
      min: `${(await minMax).min}`,
      max: `${(await minMax).max}`,
      value: `${(await minMax).min}`,
    });
    const rangeMax = new Range(this.element, 'max', {
      type: 'range',
      min: `${(await minMax).min}`,
      max: `${(await minMax).max}`,
      value: `${(await minMax).max}`,
    });
    const min = new Div(this.element, 'range_min left multirange__content');
    const max = new Div(this.element, 'range_max right multirange__content multirange__right');
    let minVal = '';
    let maxVal = '';

    min.element.textContent = `${(await minMax).min}${postfix}`;
    max.element.textContent = `${(await minMax).max}${postfix}`;
    rangeMin.element.addEventListener('input', () => {
      minVal = doForMin(minVal, rangeMin, min, postfix, rangeMax);
    });
    rangeMax.element.addEventListener('input', () => {
      maxVal = doForMax(maxVal, rangeMax, max, postfix, rangeMin);
    });
    rangeMin.element.addEventListener('change', () => {
      GetFilteredItem.getFilteredItem(this.title === 'price' ? 'minPrice' : 'minStock', +minVal);
    });
    rangeMax.element.addEventListener('change', () => {
      GetFilteredItem.getFilteredItem(this.title === 'price' ? 'maxPrice' : 'maxStock', +maxVal);
    });
    title.element.textContent = this.title;
    this.element.append(rangeMin.element, rangeMax.element, min.element, max.element);
    if (this.title === 'price') {
      MultiRange.minPriceEl = rangeMin.element;
      MultiRange.maxPriceEl = rangeMax.element;
      MultiRange.minPrice = min.element;
      MultiRange.maxPrice = max.element;
    } else if (this.title === 'stock') {
      MultiRange.minSrockEl = rangeMin.element;
      MultiRange.maxSrockEl = rangeMax.element;
      MultiRange.minStock = min.element;
      MultiRange.maxStock = max.element;
    }
  }
}
export default MultiRange;
