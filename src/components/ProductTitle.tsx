import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Product from '../entities/Product';

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover span {
    text-decoration: underline;
  }
`;

const Title = styled.span`
  color: ${(props) => props.theme.colors.text.main};
  font-weight: 500;
`;

interface ProductTitleProps {
  product: Product;
}

const ProductTitle = ({ product }: ProductTitleProps) => {
  return (
    <StyledLink
      to={`/product/${product.id}`}
      style={{ textDecoration: 'none' }}
    >
      <Title>{product.name}</Title>
    </StyledLink>
  );
};

export default ProductTitle;
