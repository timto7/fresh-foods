import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: 0;
  border-radius: ${(props) => props.theme.radii.button};
  color: ${(props) => props.theme.colors.text.inverted};
  outline: 0;
  padding: 0.5em;
  cursor: pointer;
`;

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
