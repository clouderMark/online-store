export const getAllProduct = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const result = await response.json();

  return result;
};

export const getOneProduct = async (id: number) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const result = await response.json();

  return result;
};

export const searchProducts = async (name: string) => {
  const response = await fetch(`https://dummyjson.com/products/search?q=${name}`);
  const result = await response.json();

  return result;
};

export const limitAndSkipProducts = async (limit: number, skip: number, select: Array<string>) => {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=${select.join(',')}`);
  const result = await response.json();

  return result;
};

export const getAllProdCategoies = async () => {
  const response = await fetch('https://dummyjson.com/products/categories');
  const result = await response.json();

  return result;
};

export const getProdOfACategory = async (name: string) => {
  const response = await fetch(`https://dummyjson.com/products/category/${name}`);
  const result = await response.json();

  return result;
};
