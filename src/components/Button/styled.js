import styled, { css } from 'styled-components';

const primaryStyle = css`
  background: #66b6e6;
  color: #fff;
  border: none;
`;

const defaultStyle = css`
  background: #CCC;
  color: #fff;
  border: none;
`;

const dangerStyle = css`
  background: #d24456;
  color: #fff;
  border: none;
`;

const variants = {
  primary: primaryStyle,
  default: defaultStyle,
  danger: dangerStyle
};

export const Button = styled.button`
  border-radius: 3px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  

  ${props => props.variant && variants[props.variant]}

  ${props => 
    props.sm 
    ? css`
      height: 18px;
      font-size: 12px;
    `
    : css`
      height: 28px;
      font-size: 16px;
    `
  }

  &:active {
    box-shadow: inset 0 0 999px rgba(0,0,0,.1);
  }
`;