import Div from '../div/div';
import Range from '@/core/components/range/range';

class MultiRange extends Div {
  title: string;

  constructor(parent: HTMLElement, title: string) {
    super(parent, 'multirange');
    this.title = title;
    this.start();
  }

  start() {
    const title = new Div(this.element, 'multirange__title');
    const rangeMin = new Range(this.element, 'min', {
      name: 'range_1',
      type: 'range',
      min: '1',
      max: '10000',
      value: '1000',
    });
    const rangeMax = new Range(this.element, 'max', {
      name: 'range_1',
      type: 'range',
      min: '1',
      max: '10000',
      value: '9000',
    });
    const min = new Div(this.element, 'range_min light left multirange__content');
    const max = new Div(this.element, 'range_max light right multirange__content multirange__right');

    min.element.textContent = '1000';
    max.element.textContent = '9000';

    let minVal;
    let maxVal;

    rangeMin.element.addEventListener('input', () => {
      minVal = rangeMin.element.value;
      min.element.textContent = minVal;
      rangeMin.element.value = min.element.textContent;

      if (+rangeMin.element.value > +rangeMax.element.value - 5) {
        rangeMin.element.value = `${+rangeMax.element.value - 5}`;
        min.element.textContent = rangeMin.element.value;
      }
    });

    rangeMax.element.addEventListener('input', () => {
      maxVal = rangeMax.element.value;
      max.element.textContent = maxVal;
      rangeMax.element.value = max.element.textContent;

      if (+rangeMax.element.value - 5 < +rangeMin.element.value) {
        rangeMax.element.value = `${+rangeMin.element.value - 5}`;
        max.element.textContent = rangeMax.element.value;
      }
    });
    title.element.textContent = this.title;

    this.element.append(rangeMin.element, rangeMax.element, min.element, max.element);
  }
}

export default MultiRange;
