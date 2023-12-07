import { Link } from 'react-router-dom';

import Product from '../entities/Product';
import Button from './Button';
import useBasketStore from '../stores/basket-store';

const ProductCard = ({ product }: { product: Product }) => {
  const addItem = useBasketStore((s) => s.addItem);
  const removeItem = useBasketStore((s) => s.removeItem);

  const quantity = useBasketStore(
    (s) =>
      s.basket.find((basketItem) => basketItem.product.id === product.id)
        ?.quantity
  );

  return (
    <div
      style={{
        border: '1px solid black',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        height: 200,
        justifyContent: 'space-between',
        marginBottom: '10px',
        padding: '1em',
        width: 200,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </div>
      <div>
        <p>£{product.price}</p>
        <p>Quantity: {quantity}</p>
        <Button onClick={() => addItem(product)}>Add</Button>
        <Button onClick={() => removeItem(product)}>Remove</Button>
      </div>
    </div>
  );
};

export default ProductCard;
