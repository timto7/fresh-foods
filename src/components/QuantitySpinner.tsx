import Button from './Button';

import Product from '../entities/Product';
import useBasketStore from '../stores/basket-store';

interface QuantitySpinnerProps {
  basketMode?: boolean;
  product: Product;
}

const QuantitySpinner = ({
  basketMode = false,
  product,
}: QuantitySpinnerProps) => {
  const addItem = useBasketStore((state) => state.addItem);
  const removeItem = useBasketStore((state) => state.removeItem);

  const quantity = useBasketStore(
    (state) =>
      state.basket.find((basketItem) => basketItem.product.id === product.id)
        ?.quantity
  );

  if (!quantity) {
    return <Button onClick={() => addItem(product)}>Add To Basket</Button>;
  }

  return (
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <Button
        disabled={basketMode && quantity === 1}
        onClick={() => removeItem(product)}
      >
        -
      </Button>
      <span style={{ margin: '0 0.5em' }}>{quantity}</span>
      <Button onClick={() => addItem(product)}>+</Button>
    </div>
  );
};

export default QuantitySpinner;
