import {IItem} from '@/types/type';

const emptyPromise: Promise<IItem[]> = new Promise((resolve) => {
  const emptyPromise = [{
    title: 'empty',
    brand: 'empty',
    category: 'empty',
    description: 'empty',
    discountPercentage: 0,
    id: 0,
    images: [''],
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: 'empty',
  }];

  resolve(emptyPromise);
});

export default emptyPromise;
