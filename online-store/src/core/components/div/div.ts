import {Template} from '@/core/templates/template';

class Div extends Template {
  constructor(parent: HTMLElement, divClass: String) {
    super(parent, 'div', `${divClass}`);
  }
}

export default Div;
