import Page from '@/core/templates/page';

class MainPage extends Page {
  static TextObject = {
    mainTitle: 'Online Sore',
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(MainPage.TextObject.mainTitle);

    this.container.append(title);

    return this.container;
  }
}

export default MainPage;
