import Page from '@/core/templates/page';
import Categoty from '@/core/components/category/category';

class MainPage extends Page {
  static TextObject = {
    mainTitle: 'Online Sore',
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(MainPage.TextObject.mainTitle);
    const category = new Categoty(this.container);

    this.container.append(title, category.element);

    return this.container;
  }
}

export default MainPage;
