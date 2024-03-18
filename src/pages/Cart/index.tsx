import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import ProductContainer from '../../components/Cart/Product/ProductContainer';

import { useCartContext } from '../../context/CartContext';
import useFormatPrice from '../../hooks/useFormatPrice';
import EmptyState from '../../components/EmptyState';

import * as S from './styles';

const Cart = () => {
  const navigate = useNavigate();
  const { totalPrice, totalQuantity, resetCart } = useCartContext();
  const formattedPrice = useFormatPrice(totalPrice);

  const handleCartCheckout = () => {
    resetCart();
    navigate('/checkout/orderPlaced');
  };

  return (
    <S.Container>
      {totalQuantity ? (
        <>
          <ProductContainer />
          <S.Summary>
            <Button
              text="FINALIZAR PEDIDO"
              isDisabled={!totalQuantity}
              onClick={() => handleCartCheckout()}
            />
            <S.Total>
              <b>TOTAL</b>
              <strong>{formattedPrice}</strong>
            </S.Total>
          </S.Summary>
        </>
      ) : (
        <EmptyState buttonText="Voltar as compras" navigateTo="/" />
      )}
    </S.Container>
  );
};

export default Cart;
