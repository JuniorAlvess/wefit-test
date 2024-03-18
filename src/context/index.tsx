import ProductProvider from './ProductContext';
import { CartProvider } from './CartContext';
import IGlobalProviderProps from '../types/GlobalProviderProps';

const GlobalProvider = ({ children }: IGlobalProviderProps) => {
  return (
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  );
};

export default GlobalProvider;
