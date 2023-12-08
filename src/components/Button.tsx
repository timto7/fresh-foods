/* eslint-disable no-unexpected-multiline */
import { ReactNode } from 'react';

import Color from 'color';
import styled from 'styled-components';

import ButtonIconContainer from './ButtonIconContainer';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  variant?: 'ghost' | 'outlined' | 'solid';
}

const StyledButton = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${(props) => {
    if (props.variant === 'solid') return props.theme.colors.primary;

    return 'transparent';
  }};
  border: ${(props) => {
    if (props.variant === 'outlined')
      return `1px solid ${props.theme.colors.primary}`;

    return 0;
  }};
  border-radius: ${(props) => props.theme.radii.button};
  color: ${(props) => {
    if (props.variant === 'solid') return props.theme.colors.text.inverted;

    return props.theme.colors.primary;
  }};
  cursor: pointer;
  display: flex;
  font-weight: 600;
  height: 32px;
  justify-content: center;
  outline: 0;
  padding: 0 ${(props) => (props.variant === 'ghost' ? '0' : '1')}em;

  &:hover {
    background-color: ${(props) => {
      if (props.variant === 'solid') {
        return Color(props.theme.colors.primary)
          [props.theme.mode === 'dark' ? 'lighten' : 'darken'](0.15)
          .toString();
      }

      if (props.variant === 'outlined') {
        return Color(props.theme.colors.primary).fade(0.95).toString();
      }

      return 'transparent';
    }};
  }

  &:focus-visible {
    outline: 2px solid
      ${(props) =>
        Color(props.theme.colors.primary).fade(0.5).saturate(0.5).toString()};
    transition: outline 0.1s ease;
  }
`;

const Button = ({
  children,
  endIcon,
  startIcon,
  variant = 'solid',
  ...props
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...props}>
      {startIcon && (
        <ButtonIconContainer position="start">{startIcon}</ButtonIconContainer>
      )}
      <span>{children}</span>
      {endIcon && (
        <ButtonIconContainer position="end">{endIcon}</ButtonIconContainer>
      )}
    </StyledButton>
  );
};

export default Button;
