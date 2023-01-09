import Div from '../div/div';

class Product extends Div {
  parent: HTMLElement;

  title: string;

  description: string;

  discountPercentage: number;

  rating: number;

  stock: number;

  brand: string;

  category: string;

  price: number;

  images: string[];

  constructor(
    parent: HTMLElement,
    title: string,
    description: string,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    price: number,
    images: string[],
  ) {
    super(parent, 'product');
    this.parent = parent;
    this.title = title;
    this.description = description;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.brand = brand;
    this.category = category;
    this.price = price;
    this.images = images;
  }

  start() {
    const title = new Div(this.element, 'product__title');
    const content = new Div(this.element, 'product__content');
    const images = new Div(this.element, 'product__img');

    content.element.append(images.element);
    images.element.style.backgroundImage = `url('${this.images[0]}')`;

    title.element.textContent = this.title;
  }
}

export default Product;
