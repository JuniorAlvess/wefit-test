import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

import orderPlacedImage from '../../assets/images/order_placed_successfully_illustration.png';
import * as S from './styles';

const OrderPlaced = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Title>Compra realizada com sucesso!</S.Title>
      <S.ImageContainer>
        <img src={orderPlacedImage} alt="Order placed successfully" />
      </S.ImageContainer>
      <Button text="VOLTAR" onClick={() => navigate('/')} style={{ width: '173px' }} />
    </S.Container>
  );
};

export default OrderPlaced;
