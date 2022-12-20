import Div from '../div/div';

class Info extends Div {
  parent: HTMLElement;

  thisClass: string;

  title: string;

  category: string;

  brand: string;

  price: number;

  discountPercentage: number;

  rating: number;

  stock: number;

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
  ) {
    super(parent, `${thisClass}__info`);
    this.parent = parent;
    this.thisClass = thisClass;
    this.title = title;
    this.category = category;
    this.brand = brand;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.itemCreate();
  }

  itemCreate() {
    const category = new Div(this.element, `${this.thisClass}__category`);
    const categoryTitle = new Div(this.element, `${this.thisClass}__category-tile`);
    const categoryContent = new Div(this.element, `${this.thisClass}__category-content`);
    const brand = new Div(this.element, `${this.thisClass}__brand`);
    const brandTitle = new Div(this.element, `${this.thisClass}__brand-tile`);
    const brandContent = new Div(this.element, `${this.thisClass}__brand-content`);
    const price = new Div(this.element, `${this.thisClass}__price`);
    const priceTitle = new Div(this.element, `${this.thisClass}__price-tile`);
    const priceContent = new Div(this.element, `${this.thisClass}__price-content`);
    const discount = new Div(this.element, `${this.thisClass}__discount`);
    const discountTitle = new Div(this.element, `${this.thisClass}__discount-tile`);
    const discountContent = new Div(this.element, `${this.thisClass}__discount-content`);
    const rating = new Div(this.element, `${this.thisClass}__rating`);
    const ratingTitle = new Div(this.element, `${this.thisClass}__rating-tile`);
    const ratingContent = new Div(this.element, `${this.thisClass}__rating-content`);
    const stock = new Div(this.element, `${this.thisClass}__stock`);
    const stockTitle = new Div(this.element, `${this.thisClass}__stock-tile`);
    const stockContent = new Div(this.element, `${this.thisClass}__stock-content`);

    categoryTitle.element.textContent = 'Category: ';
    categoryContent.element.textContent = this.category;
    brandTitle.element.textContent = 'Brand: ';
    brandContent.element.textContent = this.brand;
    priceTitle.element.textContent = 'Price: ';
    priceContent.element.textContent = `${this.price}`;
    discountTitle.element.textContent = 'Discount: ';
    discountContent.element.textContent = `${this.discountPercentage} %`;
    ratingTitle.element.textContent = 'Rating: ';
    ratingContent.element.textContent = `${this.rating}`;
    stockTitle.element.textContent = 'Stock: ';
    stockContent.element.textContent = `${this.stock}`;
    category.element.append(categoryTitle.element, categoryContent.element);
    brand.element.append(brandTitle.element, brandContent.element);
    price.element.append(priceTitle.element, priceContent.element);
    discount.element.append(discountTitle.element, discountContent.element);
    rating.element.append(ratingTitle.element, ratingContent.element);
    stock.element.append(stockTitle.element, stockContent.element);
    this.element.append(
      category.element,
      brand.element,
      price.element,
      discount.element,
      rating.element,
      stock.element,
    );
  }
}

export default Info;
