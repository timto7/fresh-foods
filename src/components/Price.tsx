import styled from 'styled-components';

const Price = styled.span`
  color: ${(props) => props.theme.colors.text.soft};
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin: 0.5em 0;
`;

export default Price;
