import Page from '@/core/templates/page';
import Filter from '@/core/components/filter/filter';

class MainPage extends Page {
  static TextObject = {
    mainTitle: 'Online Sore',
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(MainPage.TextObject.mainTitle);
    const category = new Filter(this.container, 'category');
    const brand = new Filter(this.container, 'brand');

    this.container.append(title, category.element, brand.element);

    return this.container;
  }
}

export default MainPage;
