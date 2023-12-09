import Color from 'color';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  border-radius: ${(props) => props.theme.radii.button};
  text-decoration: none;

  &:hover span {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 3px solid
      ${(props) =>
        Color(props.theme.colors.primary).fade(0.5).saturate(0.5).toString()};
    transition: outline 0.1s ease;
  }
`;

export default StyledLink;
