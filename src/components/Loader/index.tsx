import loader from '../../assets/images/Loarder.png';

import * as S from './styles';

const Loading = () => {
  return (
    <S.LoaderContainer>
      <img src={loader} alt="loader" />
    </S.LoaderContainer>
  );
};

export default Loading;
