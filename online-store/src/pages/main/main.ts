import Page from '@/core/templates/page';
import Filter from '@/core/components/filter/filter';
import Div from '@/core/components/div/div';
import ProductList from '@/core/components/productList/productList';
import MultiRange from '@/core/components/range/multeRange';
import State from '@/state/state';
import Select from '@/core/components/select/select';

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
    const priceRange = new MultiRange(this.container, 'price', State.getMinMaxPrice());
    const stockRange = new MultiRange(this.container, 'stock', State.getMinMaxStock());
    const productPage = new Div(this.container, 'product-page');
    const select = new Select(this.container, 'select');
    const productList = new ProductList(this.container, 'product-list', State.getProducts());

    filter.element.append(category.element, brand.element, priceRange.element, stockRange.element);
    productPage.element.append(select.element, productList.element);
    mainPage.element.append(filter.element, productPage.element);
    this.container.append(title, mainPage.element);

    return this.container;
  }
}

export default MainPage;
