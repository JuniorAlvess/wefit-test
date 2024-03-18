import React, { createContext, useContext, useState, useEffect } from 'react';
import productService from '../services/api/productService';
import IProduct, { IProductContextType, IProductProviderProps } from '../types/Product';

const ProductContext = createContext<IProductContextType | undefined>(undefined);

export const useProductContext = (): IProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

const ProductProvider = ({ children }: IProductProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await productService();
        setProducts(data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const value = { products, loading, error };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
