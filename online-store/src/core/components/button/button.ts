import {Template} from '@/core/templates/template';

class Button extends Template {
  constructor(parent: HTMLElement, divClass: String) {
    super(parent, 'button', `${divClass}`);
  }
}

export default Button;
