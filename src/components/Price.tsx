import styled from 'styled-components';

const Price = styled.span`
  color: ${(props) => props.theme.colors.text.soft};
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin: 0.5em 0;
`;

export default Price;
