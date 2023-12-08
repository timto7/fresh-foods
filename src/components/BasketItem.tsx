import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Product from '../entities/Product';
import useBasketStore from '../stores/basket-store';
import Button from './Button';
import QuantitySpinner from './QuantitySpinner';
import Price from './Price';

interface BasketItemProps {
  product: Product;
}

const ListItem = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.colors.text.soft};
  padding-bottom: 1em;
  margin: 1em 0;

  &:last-of-type {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

const BasketItem = ({ product }: BasketItemProps) => {
  const removeAllOfItem = useBasketStore((state) => state.removeAllOfItem);

  return (
    <ListItem>
      <div>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
        <Price>£{product.price}</Price>
        <div style={{ display: 'flex' }}>
          <QuantitySpinner basketMode product={product} />
          <Button
            onClick={() => removeAllOfItem(product)}
            style={{ marginLeft: '1em' }}
            variant="ghost"
          >
            Remove
          </Button>
        </div>
      </div>
    </ListItem>
  );
};

export default BasketItem;
