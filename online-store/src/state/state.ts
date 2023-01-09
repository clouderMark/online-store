import {getAllProducts} from '@/http/catalogAPI';
import {IItem} from '@/types/type';

class State {
  static async getProducts() {
    const {products} = await getAllProducts();

    return products;
  }

  static async getBrands() {
    const result: Array<IItem> = await this.getProducts();

    const brands: Array<string> = [];

    for await (const item of result) {
      const brandName = item.brand.toLowerCase();
      const result = brandName.charAt(0).toUpperCase() + brandName.slice(1);

      brands.push(result);
    }

    return Array.from(new Set(brands));
  }

  static async getCategories() {
    const result: Array<IItem> = await State.getProducts();

    const categories: Array<string> = [];

    for await (const item of result) {
      categories.push(item.category.toLowerCase());
    }

    return Array.from(new Set(categories));
  }

  static async getMinMaxPrice() {
    const result: Array<IItem> = await this.getProducts();

    result.sort((a, b) => a.price - b.price);

    return {min: result[0].price, max: result[99].price};
  }

  static async getMinMaxStock() {
    const result: Array<IItem> = await this.getProducts();

    result.sort((a, b) => a.stock - b.stock);

    return {min: result[0].stock, max: result[99].stock};
  }
}

export default State;
