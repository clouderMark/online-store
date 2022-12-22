import {Template} from '@/core/templates/template';
import Item from './item';
import {IItem} from '@/types/type';

class ProductList extends Template {
  constructor(parent: HTMLElement, thisClass: string, items: Promise<IItem[]>) {
    super(parent, 'div', thisClass);
    this.start(items);
  }

  private async prodItemCreator(item: IItem) {
    const catalog: HTMLElement | null = document.querySelector('.product-list');
    const productItem = new Item(
      catalog!,
      'item',
      item.title,
      item.category,
      item.brand,
      item.price,
      item.discountPercentage,
      item.rating,
      item.stock,
      item.images[0],
    );

    catalog!.append(productItem.element);
  }

  private async start(items: Promise<IItem[]>) {
    items
      .then((product) => {
        product.forEach(this.prodItemCreator);
      });
  }
}

export default ProductList;
