import { ReactNode } from 'react';

export default interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export interface IProductProviderProps {
  children: ReactNode;
}

export interface IProductContextType {
  products: IProduct[];
  loading: boolean;
  error: Error | null;
}
