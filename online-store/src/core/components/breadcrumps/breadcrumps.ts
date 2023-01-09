import Content from '../span/span';
import Div from '../div/div';

class Breadcrumps {
  category: string;

  brand: string;

  title: string;

  parent: HTMLElement;

  constructor(parent: HTMLElement, category: string, brand: string, title: string) {
    this.category = category;
    this.brand = brand;
    this.title = title;
    this.parent = parent;
    this.start();
  }

  start() {
    const breadcrumps = new Div(this.parent, 'breadrcumps');
    const address0 = new Content(this.parent, 'Store', 'breadrcumps');
    const address1 = new Content(this.parent, this.category, 'breadrcumps');
    const address2 = new Content(this.parent, this.brand, 'breadrcumps');
    const address3 = new Content(this.parent, this.title, 'breadrcumps');

    breadcrumps.element.append(address0.element, address1.element, address2.element, address3.element);
    this.parent.append(breadcrumps.element);
  }
}

export default Breadcrumps;
