import styled from 'styled-components';

import Product from '../entities/Product';
import useBasketStore from '../stores/basket-store';
import Button from './Button';
import Price from './Price';
import ProductTitle from './ProductTitle';
import QuantitySpinner from './QuantitySpinner';

interface BasketItemProps {
  product: Product;
}

const ListItem = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.colors.divider};
  padding-bottom: 1em;
  margin: 1em 0;

  &:last-of-type {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

// A single list item for display and editing a basket item
const BasketItem = ({ product }: BasketItemProps) => {
  const removeAllOfItem = useBasketStore((state) => state.removeAllOfItem);

  return (
    <ListItem>
      <div>
        <ProductTitle product={product} />
        <Price>£{product.price}</Price>
        <div style={{ display: 'flex' }}>
          <QuantitySpinner basketMode product={product} />
          <Button
            onClick={() => removeAllOfItem(product)}
            style={{ marginLeft: '1.5em' }}
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
