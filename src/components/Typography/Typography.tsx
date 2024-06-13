import style from './typography.module.css';
import { ITypography } from './Typography.type';

const Typography = ({ children, variant = 'body1' }: ITypography) => {
  return <p className={`${style.typoStyle} ${style[variant]}`}>{children}</p>;
};

export default Typography;
