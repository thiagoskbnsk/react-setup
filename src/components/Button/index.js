import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

function Button({ title, action, variant, sm }) {
  return <S.Button type="button" onClick={action} variant={variant} sm={sm}>{title}</S.Button>;
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  variant: PropTypes.string,
  sm: PropTypes.bool
}

Button.defaultProps = {
  variant: "default",
  sm: false
};

export default Button;