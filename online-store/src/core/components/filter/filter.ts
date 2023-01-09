import {Template} from '@/core/templates/template';
import Chbx from '../checkbox/checkbox';
import Label from '../label/label';
// import {filterByCategory} from '@/filtration/filtration';
import GetFilteredItem from '@/filtration/getFilteredItem';

class Filter extends Template {
  type: string;

  constructor(parrent: HTMLElement, type: string, items: Promise<string[]>) {
    super(parrent, 'div', type);
    this.type = type;
    this.start(items);
  }

  private async drawVariantsForCategories(el: string) {
    /*
    * В этом методе и drawCheckboxesForBrands какой то необычайный прикол
    * Не могу получить this.element и из за этого методы дублируются и
    * на каждый элемент обращаются к ДОМ для получения родителя чтобы в
    * него добавить чекбокс с названием
    */
    const category: HTMLElement | null = document.querySelector('.category');
    const label = new Label(category!, 'category');
    const checkbox = new Chbx(label.element, el);

    checkbox.render();
    label.render();
    checkbox.element.addEventListener('change', () => {
      GetFilteredItem.getFilteredItem('category', checkbox.element.value);
    });
  }

  private async drawVariantsForBrands(el: string) {
    const brand: HTMLElement | null = document.querySelector('.brand');
    const label = new Label(brand!, 'category');
    const checkbox = new Chbx(label.element, el);

    checkbox.render();
    label.render();
    checkbox.element.addEventListener('change', () => {
      // console.log(label.element.textContent);
      GetFilteredItem.getFilteredItem('brand', checkbox.element.value);
    });
  }

  private start(items: Promise<string[]>) {
    if (this.type === 'category') {
      items
        .then((category) => {
          category.forEach(this.drawVariantsForCategories);
        });
    }

    if (this.type === 'brand') {
      items
        .then((brand) => {
          brand.forEach(this.drawVariantsForBrands);
        });
    }
  }
}

export default Filter;
