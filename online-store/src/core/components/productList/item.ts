import {Template} from '@/core/templates/template';
import Div from '../div/div';
import Info from './info';
import Button from '../button/button';

class Item extends Template {
  parent: HTMLElement;

  thisClass: string;

  title: string;

  category: string;

  brand: string;

  price: number;

  discountPercentage: number;

  rating: number;

  stock: number;

  images: string;

  id: number;

  constructor(
    parent: HTMLElement,
    thisClass: string,
    title: string,
    category: string,
    brand: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    images: string,
    id: number,
  ) {
    super(parent, 'div', `${thisClass}`);
    this.parent = parent;
    this.thisClass = thisClass;
    this.title = title;
    this.category = category;
    this.brand = brand;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.images = images;
    this.id = id;
    this.itemCreate();
  }

  private itemCreate() {
    const itemTitle = new Div(this.element, `${this.thisClass}__title`);

    this.element.style.backgroundImage = `url(${this.images})`;
    itemTitle.element.textContent = this.title;
    const itemInfo = new Info(
      this.element,
      `${this.thisClass}`,
      this.title,
      this.category,
      this.brand,
      this.price,
      this.discountPercentage,
      this.rating,
      this.stock,
    );
    const buttonAdd = new Button(this.element, `${this.thisClass}__button-add`);

    buttonAdd.element.textContent = 'add to cart';

    const currentItem = this.id;

    this.element.id = `${currentItem}`;

    this.element.onclick = function openItem() {
      window.location.hash = `page-item-${currentItem}`;
    };

    this.element.append(itemTitle.element, itemInfo.element, buttonAdd.element);
  }
}

export default Item;
