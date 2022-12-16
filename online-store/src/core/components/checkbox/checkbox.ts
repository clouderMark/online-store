import {Template} from '@/core/templates/template';
import Content from '../span/span';

class Checkbox extends Template {
  constructor(parent: HTMLElement, val: string) {
    super(parent, 'input', 'label__checkbox visually-hidden', '', {type: 'checkbox', value: `${val}`});

    this.addContent(parent, val);
  }

  addContent(inner: HTMLElement, value: string) {
    const el = new Content(inner, value, 'label');

    el.render();
  }
}

export default Checkbox;
