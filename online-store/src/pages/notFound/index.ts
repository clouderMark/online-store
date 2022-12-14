import Page from '@/core/templates/page';

class NotFoundPage extends Page {
  static TextObject = {
    mainTitle: 'Page not found',
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(NotFoundPage.TextObject.mainTitle);

    this.container.append(title);

    return this.container;
  }
}

export default NotFoundPage;
