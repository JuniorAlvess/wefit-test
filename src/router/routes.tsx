import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import OrderPlaced from '../pages/OrderPlaced';
import NotFound from '../components/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout/cart" element={<Cart />} />
      <Route path="/checkout/orderPlaced" element={<OrderPlaced />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
