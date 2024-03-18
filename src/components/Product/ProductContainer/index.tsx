import ProductCard from '../ProductCard';
import IProduct from '../../../types/Product';

import { useProductContext } from '../../../context/ProductContext';

import * as S from './styles';
import EmptyState from '../../EmptyState';

const ProductContainer = () => {
  const { products } = useProductContext();

  return (
    <S.Container>
      {products ? (
        products?.map((product: IProduct) => <ProductCard key={product.id} {...product} />)
      ) : (
        <EmptyState buttonText="Recarregar página" />
      )}
    </S.Container>
  );
};

export default ProductContainer;
