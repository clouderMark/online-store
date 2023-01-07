import Button from '../button/button';
import Div from '../div/div';
// import {addFiltersFromQuery} from '@/filtration/fromQuery/addFiltersFromQuery';

class FilterButtons extends Div {
  constructor(parent: HTMLElement, tagClass: string) {
    super(parent, tagClass);

    this.start();
  }

  start() {
    const reset = new Button(this.element, 'filter-buttons__reset filter-buttons__button');
    const copy = new Button(this.element, 'filter-buttons__copy filter-buttons__button');

    reset.element.textContent = 'Reset';
    copy.element.textContent = 'Copy link';

    reset.element.onclick = function rf() {
      // const url = window.location.href;
      // const positionFrom = url.indexOf('/?category');
      // const cleanUrl = url.slice(0, positionFrom);

      // window.history.pushState('object or string', 'Title', cleanUrl);
      // addFiltersFromQuery();
    };

    this.element.append(reset.element, copy.element);
  }// window.history.pushState('object or string', 'Title', `?${result}`)
}

export default FilterButtons;
