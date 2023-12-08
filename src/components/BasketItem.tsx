import { Link } from 'react-router-dom';

import Product from '../entities/Product';
import useBasketStore from '../stores/basket-store';
import Button from './Button';
import QuantitySpinner from './QuantitySpinner';

interface BasketItemProps {
  product: Product;
}

const BasketItem = ({ product }: BasketItemProps) => {
  const removeAllOfItem = useBasketStore((state) => state.removeAllOfItem);

  return (
    <li style={{ margin: '1em 0' }}>
      <div>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
        <span style={{ display: 'block' }}>£{product.price}</span>
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
    </li>
  );
};

export default BasketItem;
