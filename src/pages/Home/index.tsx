import Loading from '../../components/Loader';
import ProductContainer from '../../components/Product/ProductContainer';
import { useProductContext } from '../../context/ProductContext';

import * as S from './styles';

const Home = () => {
  const { loading } = useProductContext();

  return (
    <S.Container>
      {loading && <Loading />}
      <ProductContainer />
    </S.Container>
  );
};

export default Home;
