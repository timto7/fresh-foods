/* eslint-disable no-unexpected-multiline */
import { ReactNode } from 'react';

import Color from 'color';
import styled from 'styled-components';

import ButtonIconContainer from './ButtonIconContainer';

const disabliseColor = (color: string, disabled: boolean) =>
  disabled ? Color(color).grayscale().fade(0.5).toString() : color;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  variant?: 'ghost' | 'outlined' | 'solid';
}

const StyledButton = styled.button<{
  $variant: 'ghost' | 'outlined' | 'solid';
}>`
  align-items: center;
  background-color: ${(props) => {
    if (props.$variant === 'solid')
      return disabliseColor(
        props.theme.colors.primary,
        props.disabled || false
      );

    return 'transparent';
  }};
  border: ${(props) => {
    if (props.$variant === 'outlined')
      return `1px solid ${disabliseColor(
        props.theme.colors.primary,
        props.disabled || false
      )}`;

    return 0;
  }};
  border-radius: ${(props) => props.theme.radii.button};
  color: ${(props) => {
    if (props.$variant === 'solid') return props.theme.colors.text.inverted;

    return disabliseColor(props.theme.colors.primary, props.disabled || false);
  }};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  font-weight: 600;
  height: 32px;
  justify-content: center;
  min-width: 32px;
  outline: 0;
  padding: 0 ${(props) => (props.$variant === 'ghost' ? '0' : '1')}em;
  transition: transform 0.1s ease;

  &:hover:enabled {
    background-color: ${(props) => {
      if (props.$variant === 'solid') {
        return Color(props.theme.colors.primary)
          [props.theme.mode === 'dark' ? 'lighten' : 'darken'](0.15)
          .toString();
      }

      if (props.$variant === 'outlined') {
        return Color(props.theme.colors.primary).fade(0.95).toString();
      }

      return 'transparent';
    }};
    color: ${(props) => {
      if (props.$variant === 'solid') return props.theme.colors.text.inverted;

      if (props.$variant === 'ghost')
        return Color(props.theme.colors.primary)
          [props.theme.mode === 'dark' ? 'lighten' : 'darken'](0.15)
          .toString();

      return props.theme.colors.primary;
    }};
  }

  &:focus-visible {
    outline: 3px solid
      ${(props) =>
        Color(props.theme.colors.primary).fade(0.5).saturate(0.5).toString()};
    transition: outline 0.1s ease;
  }

  &:active {
    transform: scale(0.97);
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
    <StyledButton type="button" $variant={variant} {...props}>
      {startIcon && (
        <ButtonIconContainer $position="start">{startIcon}</ButtonIconContainer>
      )}
      <span>{children}</span>
      {endIcon && (
        <ButtonIconContainer $position="end">{endIcon}</ButtonIconContainer>
      )}
    </StyledButton>
  );
};

export default Button;
