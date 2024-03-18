import ProductCard from '../ProductCard';

import { useCartContext } from '../../../../context/CartContext';
import IProduct from '../../../../types/Product';

import * as S from './styles';

const ProductContainer = () => {
  const { cart } = useCartContext();
  const products = cart?.items;

  return (
    <S.Container>
      <S.ColumnsContainer>
        <S.ColumnName>PRODUTO</S.ColumnName>
        <S.ColumnName>QTD</S.ColumnName>
        <S.ColumnName>SUBTOTAL</S.ColumnName>
      </S.ColumnsContainer>
      {products?.map((product: IProduct) => <ProductCard key={product.id} {...product} />)}
    </S.Container>
  );
};

export default ProductContainer;
