import styled from 'styled-components';

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.radii.surface};
  box-sizing: border-box;
  padding: 1em;
  box-shadow: ${(props) => props.theme.shadows.card};
`;

export default Card;
