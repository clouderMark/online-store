import {Template} from '@/core/templates/template';
import Checkbox from '../checkbox/checkbox';
import {getAllProdCategoies} from '@/http/catalogAPI';
import Label from '../label/label';

class Categoty extends Template {
  constructor(parrent: HTMLElement) {
    super(parrent, 'div', 'category');
    this.start();
  }

  private async drawCheckboxes(el: string) {
    const category: HTMLElement | null = document.querySelector('.category');
    const label = new Label(category!, 'category');
    const checkbox = new Checkbox(label.element, el);

    checkbox.render();
    label.render();
    label.element.addEventListener('change', () => {
      console.log(label.element.textContent);
    });
  }

  private start() {
    getAllProdCategoies()
      .then((category) => {
        category.forEach(this.drawCheckboxes);
      });
  }
}

export default Categoty;
