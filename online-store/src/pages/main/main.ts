import Page from '@/core/templates/page';
import Filter from '@/core/components/filter/filter';
import Div from '@/core/components/div/div';
import ProductList from '@/core/components/productList/productList';
import MultiRange from '@/core/components/range/multeRange';
import State from '@/state/state';
import Select from '@/core/components/select/select';
import Search from '@/core/components/search/search';

class MainPage extends Page {
  static TextObject = {
    mainTitle: 'Online Store',
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
    const sortProducts = new Div(this.container, 'sort-products');
    const select = new Select(this.container, 'select');
    const search = new Search(this.container, 'search');
    const productList = new ProductList(this.container, 'product-list', State.getProducts());

    sortProducts.element.append(select.element, search.element);
    filter.element.append(category.element, brand.element, priceRange.element, stockRange.element);
    productPage.element.append(sortProducts.element, productList.element);
    mainPage.element.append(filter.element, productPage.element);
    this.container.append(title, mainPage.element);

    return this.container;
  }
}

export default MainPage;
