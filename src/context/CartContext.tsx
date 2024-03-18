import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import ICart, { ICartContextData } from '../types/Cart';
import IProduct from '../types/Product';

const CartContext = createContext<ICartContextData>({} as ICartContextData);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

export function CartProvider({ children }: { children: ReactNode }) {
  const localStorageCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]') as ICart;
  const [cart, setCart] = useState<ICart>(localStorageCartItems);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item: IProduct) => {
    const existingItem = cart.items?.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
      setCart({ items: [...cart.items] });
    } else {
      setCart({ items: [...(cart.items ?? []), { ...item, quantity: 1 }] });
    }
  };

  const removeFromCart = (id: number) => {
    const updatedItems = cart.items.filter((item) => item.id !== id);
    setCart({ items: updatedItems });
  };

  const increment = (id: number) => {
    const updatedItems = cart.items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart({ items: updatedItems });
  };

  const decrement = (id: number) => {
    const updatedItems = cart.items.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    );
    setCart({ items: updatedItems });
  };

  const resetCart = () => {
    setCart({ items: [] });
  };

  const getTotalQuantity = () =>
    cart.items && cart.items.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    cart.items?.reduce((total, item) => total + item.price * item.quantity, 0) || 0;

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    setTotalQuantity(getTotalQuantity() || 0);
    setTotalPrice(getTotalPrice() || 0);
  }, [cart]);

  const contextValue: ICartContextData = {
    cart,
    addToCart,
    removeFromCart,
    increment,
    decrement,
    resetCart,
    getTotalQuantity,
    getTotalPrice,
    totalPrice,
    totalQuantity,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
