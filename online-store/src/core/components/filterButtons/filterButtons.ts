import Button from '../button/button';
import Div from '../div/div';
import {actionForReset} from './actionsForReset';

class FilterButtons extends Div {
  constructor(parent: HTMLElement, tagClass: string) {
    super(parent, tagClass);

    this.start();
  }

  async start() {
    const reset = new Button(this.element, 'filter-buttons__reset filter-buttons__button');
    const copy = new Button(this.element, 'filter-buttons__copy filter-buttons__button');

    reset.element.textContent = 'Reset';
    copy.element.textContent = 'Copy link';

    reset.element.onclick = function click() {
      actionForReset();
    };

    copy.element.onclick = function click() {
      window.navigator.clipboard.writeText(window.location.href);
    };

    this.element.append(reset.element, copy.element);
  }
}

export default FilterButtons;
