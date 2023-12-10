import styled from 'styled-components';

import Product from '../entities/Product';
import StyledLink from './StyledLink';

const Title = styled.span`
  color: ${(props) => props.theme.colors.text.main};
  font-size: 14px;
  font-weight: 800;
  overflow: hidden;
  text-overflow: ellipsis;
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
