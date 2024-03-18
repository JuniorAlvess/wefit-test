import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

import IEmptyState from '../../types/EmptyStateComponent';

import EmptyStateImage from '../../assets/images/empty_state_illustration.png';
import * as S from './styles';

const EmptyState = ({ buttonText, navigateTo }: IEmptyState) => {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0);
  };

  return (
    <S.Container>
      <S.Title>Parece que não há nada por aqui :(</S.Title>
      <S.ImageContainer>
        <img src={EmptyStateImage} alt="Empty state" />
      </S.ImageContainer>
      <Button
        text={buttonText}
        onClick={() => (navigateTo && navigate(navigateTo)) || refreshPage()}
        style={{ width: '173px' }}
      />
    </S.Container>
  );
};

export default EmptyState;
