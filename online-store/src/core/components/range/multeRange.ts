import Div from '../div/div';
import Range from '@/core/components/range/range';

class MultiRange extends Div {
  title: string;

  constructor(parent: HTMLElement, title: string, minMaxValue: Promise<{min: number, max: number}>) {
    super(parent, 'multirange');
    this.title = title;
    this.start(minMaxValue);
  }

  async start(minMax: Promise<{min: number, max: number}>) {
    const postfix = ` ${this.title === 'Price' ? '$' : ''}`;

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

    min.element.textContent = `${(await minMax).min}${postfix}`;
    max.element.textContent = `${(await minMax).max}${postfix}`;

    let minVal;
    let maxVal;

    rangeMin.element.addEventListener('input', () => {
      minVal = rangeMin.element.value;
      min.element.textContent = `${minVal}${postfix}`;
      rangeMin.element.value = minVal;

      if (+rangeMin.element.value > +rangeMax.element.value - 5) {
        rangeMin.element.value = `${+rangeMax.element.value - 5}`;
        min.element.textContent = rangeMin.element.value + postfix;
      }
    });

    rangeMax.element.addEventListener('input', () => {
      maxVal = rangeMax.element.value;
      max.element.textContent = `${maxVal} ${this.title === 'Price' ? '$' : ''}`;
      rangeMax.element.value = maxVal;

      if (+rangeMax.element.value - 5 < +rangeMin.element.value) {
        rangeMax.element.value = `${+rangeMin.element.value - 5}`;
        max.element.textContent = rangeMax.element.value + postfix;
      }
    });
    title.element.textContent = this.title;

    this.element.append(rangeMin.element, rangeMax.element, min.element, max.element);
  }
}

export default MultiRange;
