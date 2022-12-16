import MainPage from '../main/main';
import Page from '@/core/templates/page';
import BasketPage from '../basket';
import ItemPage from '../item';
import Header from '@/core/components/header/header';
import NotFoundPage from '../notFound';

export const enum PageId {
  StorePage = 'store-page',
  BasketPage = 'basket-page',
  ItemPage = 'item-page',
}

class App {
  private static container: HTMLElement = document.body;

  private initialPage: MainPage;

  private static defaultPageId: string = 'current-page';

  private header: Header;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);

    if (currentPageHTML) currentPageHTML.remove();
    let page: Page | null = null;

    if (idPage === '' || idPage === PageId.StorePage) {
      page = new MainPage(PageId.StorePage);
    } else if (idPage === PageId.BasketPage) {
      page = new BasketPage(idPage);
    } else if (idPage === PageId.ItemPage) {
      page = new ItemPage(idPage);
    } else {
      page = new NotFoundPage('notFound');
    }

    if (page) {
      const pageHTML = page.render();

      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);

      App.renderNewPage(hash);
    });
    const hash = window.location.hash.slice(1);

    App.renderNewPage(hash);
  }

  constructor() {
    this.initialPage = new MainPage('main-page');
    this.header = new Header('div', 'navigation');
  }

  run() {
    App.container.append(this.header.render());
    App.renderNewPage('main-page');
    this.enableRouteChange();
  }
}

export default App;
