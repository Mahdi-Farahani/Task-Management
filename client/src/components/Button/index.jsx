//style
import * as S from './styles';
//utils
import PropTypes from 'prop-types';

function Button({children, ...rest}) {
  return (
    <S.ButtonComponent type='primary' {...rest}>
      {children}
    </S.ButtonComponent>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
