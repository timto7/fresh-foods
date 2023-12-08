import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Product from '../entities/Product';
import Card from './Card';
import Image from './Image';
import Price from './Price';
import ProductTitle from './ProductTitle';
import QuantitySpinner from './QuantitySpinner';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  margin-bottom: 10px;
  width: 240px;

  @media (max-width: 640px) {
    align-items: center;
    width: 100%;
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
        <Link
          to={`/product/${product.id}`}
          style={{ justifyContent: 'center', display: 'flex', width: ' 100%' }}
        >
          <Image />
        </Link>
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
          <Price>£{product.price}</Price>
          <QuantitySpinner product={product} />
        </div>
      </div>
    </StyledCard>
  );
};

export default ProductCard;
