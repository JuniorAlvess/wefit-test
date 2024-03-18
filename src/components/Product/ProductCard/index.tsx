import { useEffect, useState } from 'react';

import IProduct from '../../../types/Product';
import Button from '../../Button';

import { useCartContext } from '../../../context/CartContext';
import useFormatPrice from '../../../hooks/useFormatPrice';

import * as S from './styles';

const ProductCard = (product: IProduct) => {
  const { addToCart, cart } = useCartContext();
  const handleAddToCart = () => {
    addToCart(product);
  };
  const [totalAmountAdded, setTotalAmountAdded] = useState(0);

  useEffect(() => {
    let hasOnCart = cart.items?.find((item) => item?.id === product.id);
    if (hasOnCart) {
      setTotalAmountAdded(hasOnCart.quantity);
    }
  }, [cart]);

  return (
    <S.Container>
      <S.ImageContainer>
        <img src={product.image} alt={product.title} />
      </S.ImageContainer>
      <S.Title>{product.title}</S.Title>
      <S.Price>{useFormatPrice(product.price)}</S.Price>
      <Button
        text="ADICIONAR AO CARRINHO"
        onClick={handleAddToCart}
        isAddToCart
        hasOnCart={totalAmountAdded}
      />
    </S.Container>
  );
};

export default ProductCard;
