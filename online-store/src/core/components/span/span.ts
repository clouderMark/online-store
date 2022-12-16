import {Template} from '@/core/templates/template';

class Content extends Template {
  constructor(parent: HTMLElement, content: string, className: string) {
    super(parent, 'span', `${className}__content`, `${content}`);
  }
}

export default Content;
