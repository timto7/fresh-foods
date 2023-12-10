import styled from 'styled-components';

// Used for styling a price consistently
const Price = styled.span`
  color: ${(props) => props.theme.colors.text.soft};
  display: block;
  font-size: 20px;
  font-weight: 400;
  margin: 0.5em 0;
`;

export default Price;
