import styled from 'styled-components';

// A reusable surface used throughout the app
const Card = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.radii.surface};
  box-shadow: ${(props) => props.theme.shadows.surface};
  box-sizing: border-box;
  padding: 1em;
`;

export default Card;
