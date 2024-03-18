import * as S from './styles';
import { ShoppingCart } from '../../assets/icons/icons';
import IButton from '../../types/Button';

const Button = ({ type, text, isDisabled, onClick, style, isAddToCart, hasOnCart }: IButton) => {
  return (
    <S.Button
      type={type || 'submit'}
      disabled={isDisabled}
      onClick={onClick}
      style={style}
      $success={hasOnCart !== undefined && hasOnCart > 0}
    >
      {isAddToCart && (
        <span>
          <ShoppingCart /> {hasOnCart || 0}
        </span>
      )}
      {text}
    </S.Button>
  );
};

export default Button;
