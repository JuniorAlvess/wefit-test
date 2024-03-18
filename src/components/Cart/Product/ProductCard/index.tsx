import { useEffect } from 'react';
import { CircleMinus, CirclePlus, Trash } from '../../../../assets/icons/icons';

import { useCartContext } from '../../../../context/CartContext';
import useFormatPrice from '../../../../hooks/useFormatPrice';
import IProduct from '../../../../types/Product';

import * as S from './styles';

const ProductCard = (product: IProduct) => {
  const { cart, decrement, increment, removeFromCart } = useCartContext();
  const productOnCart = cart.items?.find((item) => item.id === product.id);
  const totalAmountAdded = productOnCart?.quantity || 0;

  const getProductTotalPrice = () => {
    return productOnCart ? productOnCart.price * productOnCart.quantity : 0;
  };

  useEffect(() => {
    if (!totalAmountAdded) {
      removeFromCart(product.id);
    }
  }, [totalAmountAdded, product.id]);

  return (
    <S.Container>
      <S.ImageContainer>
        <img src={product.image} alt={product.title} />
      </S.ImageContainer>
      <S.ProductInfo>
        <S.Title>{product.title}</S.Title>
        <S.Price>{useFormatPrice(product.price)}</S.Price>
      </S.ProductInfo>
      <S.Quantity>
        <S.Button onClick={() => decrement(product.id)}>
          <CircleMinus />
        </S.Button>
        <span>{totalAmountAdded}</span>
        <S.Button onClick={() => increment(product.id)}>
          <CirclePlus />
        </S.Button>
      </S.Quantity>
      <S.Subtotal>
        <S.Price>{useFormatPrice(getProductTotalPrice())}</S.Price>
        <S.Button className="remove" onClick={() => removeFromCart(product.id)}>
          <Trash />
        </S.Button>
      </S.Subtotal>
    </S.Container>
  );
};

export default ProductCard;
