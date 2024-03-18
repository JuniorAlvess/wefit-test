import { useNavigate } from 'react-router-dom';

import Button from '../Button';

import NotFoundImage from '../../assets/images/page_not_found_illustration.png';
import * as S from './styles';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Title>Página não encontrada</S.Title>
      <S.ImageContainer>
        <img src={NotFoundImage} alt="Page not found" />
      </S.ImageContainer>
      <Button text="Voltar" onClick={() => navigate('/')} style={{ width: '173px' }} />
    </S.Container>
  );
};

export default NotFound;
