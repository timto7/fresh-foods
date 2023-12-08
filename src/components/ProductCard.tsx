import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Product from '../entities/Product';
import QuantitySpinner from './QuantitySpinner';
import Card from './Card';
import Price from './Price';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin-bottom: 10px;
  width: 200px;
`;

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <StyledCard>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </div>
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
