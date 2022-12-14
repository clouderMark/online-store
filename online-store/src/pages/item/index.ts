import Page from '@/core/templates/page';

class ItemPage extends Page {
  static TextObject = {
    mainTitle: 'Item Page',
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(ItemPage.TextObject.mainTitle);

    this.container.append(title);

    return this.container;
  }
}

export default ItemPage;
