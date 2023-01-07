// import {Template} from '@/core/templates/template';
import Content from '../span/span';
import CheckboxTmp from './chekcboxTmp';
// import {getFromQuery} from '@/filtration/getFromQuery';

// const checkedCHbx = getFromQuery().category.concat(getFromQuery().brand);

class Chbx extends CheckboxTmp {
  static checked: Array<string | number>;

  constructor(parent: HTMLElement, val: string) {
    super(parent, 'label__checkbox visually-hidden', {
      type: 'checkbox',
      value: `${val}`,
      id: `${val}`.toLowerCase(),
    });

    this.addContent(parent, val);

    if (Chbx.checked && Chbx.checked.indexOf(val.toLowerCase()) >= 0) {
      console.log(`work ${val}`);
      this.element.checked = true;
    }
  }

  addContent(inner: HTMLElement, value: string) {
    const el = new Content(inner, value, 'label');

    el.render();
  }
}

export default Chbx;
