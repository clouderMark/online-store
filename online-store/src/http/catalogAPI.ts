export const getAllProducts = async () => {
  const response = await fetch('https://dummyjson.com/products?limit=100&skip=0');
  const data = await response.json();

  return data;
};
