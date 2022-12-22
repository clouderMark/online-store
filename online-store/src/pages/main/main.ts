import Page from '@/core/templates/page';
import Filter from '@/core/components/filter/filter';
import Div from '@/core/components/div/div';
import ProductList from '@/core/components/productList/productList';
import MultiRange from '@/core/components/range/multeRange';
import State from '@/state/state';

class MainPage extends Page {
  static TextObject = {
    mainTitle: 'Online Sore',
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(MainPage.TextObject.mainTitle);
    const mainPage = new Div(this.container, 'main-page');
    const filter = new Div(mainPage.element, 'filter');
    const category = new Filter(this.container, 'category', State.getCategories());
    const brand = new Filter(this.container, 'brand', State.getBrands());
    const productList = new ProductList(this.container, 'product-list', State.getProducts());
    const priceRange = new MultiRange(this.container, 'Price', State.getMinMaxPrice());
    const stockRange = new MultiRange(this.container, 'Stock', State.getMinMaxStock());

    filter.element.append(category.element, brand.element, priceRange.element, stockRange.element);
    mainPage.element.append(filter.element, productList.element);
    this.container.append(title, mainPage.element);

    return this.container;
  }
}

export default MainPage;
