export default interface IButton {
  type?: 'submit' | 'reset';
  text: string;
  isDisabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  isAddToCart?: boolean;
  hasOnCart?: number;
}
