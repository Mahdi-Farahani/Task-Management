//style
import * as S from './styles';
//utils
import PropTypes from 'prop-types';

function Button({btnModel, children, ...rest}) {
  return (
    <S.ButtonComponent btnmodel={btnModel} type='primary' {...rest}>
      {children}
    </S.ButtonComponent>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  btnModel: PropTypes.string,
};

export default Button;
