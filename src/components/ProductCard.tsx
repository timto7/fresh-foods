import styled from 'styled-components';

import Product from '../entities/Product';
import Card from './Card';
import Image from './Image';
import Price from './Price';
import ProductTitle from './ProductTitle';
import QuantitySpinner from './QuantitySpinner';
import StyledLink from './StyledLink';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 310px;
  margin-bottom: 1em;
  width: 240px;

  @media (max-width: 640px) {
    align-items: center;
    margin-bottom: 0em;
    width: 100%;

    &:last-of-type {
      margin-bottom: 1em;
    }
  }
`;

const CardHeader = styled.div`
  width: 100%;

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <StyledCard>
      <CardHeader>
        <StyledLink
          to={`/product/${product.id}`}
          style={{
            justifyContent: 'center',
            display: 'flex',
            marginBottom: '1em',
            width: ' 100%',
          }}
        >
          <Image />
        </StyledLink>
        <ProductTitle product={product} />
      </CardHeader>
      <div>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Price style={{ marginBottom: '1em' }}>£{product.price}</Price>
          <QuantitySpinner product={product} />
        </div>
      </div>
    </StyledCard>
  );
};

export default ProductCard;
