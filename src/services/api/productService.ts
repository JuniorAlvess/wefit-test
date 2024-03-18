import api from './api';
import IProduct from '../../types/Product';

let productsCache: IProduct[] | null = null;

export const getProducts = async (): Promise<IProduct[]> => {
  if (productsCache) {
    return productsCache;
  }

  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await api.get<{ products: IProduct[] }>('/server.json');
      productsCache = response.data.products;
      resolve(productsCache);
    }, 1500);
  });
};

export default getProducts;
