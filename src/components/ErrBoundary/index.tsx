import Button from '../Button';
import * as S from './styles';

const ErrBoundary = () => {
  return (
    <S.Container>
      <S.Title>Algo deu errado :(</S.Title>
      <Button
        text="Recarregar"
        onClick={() => window.location.reload()}
        style={{ width: '173px' }}
      />
    </S.Container>
  );
};

export default ErrBoundary;
