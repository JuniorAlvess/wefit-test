import IProduct from './Product';

export default interface ICart {
  items: IProduct[];
}

export interface ICartContextData {
  cart: ICart;
  totalQuantity: number;
  totalPrice: number;
  addToCart: (item: IProduct) => void;
  removeFromCart: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
  resetCart: () => void;
}
