import {Template} from '@/core/templates/template';

class Label extends Template {
  constructor(parent: HTMLElement, parentName: string) {
    super(parent, 'label', `${parentName}__label label`);
  }
}

export default Label;
