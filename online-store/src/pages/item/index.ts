import Breadcrumps from '@/core/components/breadcrumps/breadcrumps';
import Page from '@/core/templates/page';
import State from '@/state/state';
import {IItem} from '@/types/type';
import Product from '@/core/components/product/product';

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
    this.addContent();

    return this.container;
  }

  async addContent() {
    const numberOfItem = +window.location.hash.slice(11) - 1;
    const item: IItem = (await State.getProducts())[numberOfItem];
    const {title, brand, category, description, discountPercentage, rating, stock, price, images} = item;
    // eslint-disable-next-line
    const breadcrumps = new Breadcrumps(this.container, category, brand, title);
    const product = new Product(
      this.container,
      title,
      description,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      price,
      images,
    );

    product.start();
  }
}

export default ItemPage;
