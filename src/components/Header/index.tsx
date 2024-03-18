import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import { ShoppingBasket } from '../../assets/icons/icons';
import * as S from './styles';

function Header() {
  const navigate = useNavigate();
  const { totalQuantity } = useCartContext();
  const { width } = useWindowDimensions();

  return (
    <S.Header>
      <S.Title onClick={() => navigate('/')}>WeMovies</S.Title>

      <S.ShoppingCartInfo>
        <S.ShoppingCartInfoGroup>
          {width > 768 && <S.ShoppingCartInfoText>Meu Carrinho</S.ShoppingCartInfoText>}
          <S.QuantityNumberShoppingCart>{totalQuantity} itens</S.QuantityNumberShoppingCart>
        </S.ShoppingCartInfoGroup>
        <button onClick={() => navigate('/checkout/cart')}>
          <ShoppingBasket />
        </button>
      </S.ShoppingCartInfo>
    </S.Header>
  );
}

export default Header;
