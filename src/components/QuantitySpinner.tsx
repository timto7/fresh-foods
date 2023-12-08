import { LuMinus, LuPlus } from 'react-icons/lu';
import styled from 'styled-components';

import Product from '../entities/Product';
import useBasketStore from '../stores/basket-store';
import Button from './Button';
import ButtonIconContainer from './ButtonIconContainer';
import Typography from './Typography';

interface QuantitySpinnerProps {
  basketMode?: boolean;
  product: Product;
}

const iconStyle = { fontSize: 18 };

const SpinnerButton = styled(Button)`
  padding: 0;
  width: 32px;
`;

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
      <SpinnerButton
        aria-label={`Decrease ${product.name} quantity to ${quantity - 1}`}
        disabled={basketMode && quantity === 1}
        onClick={() => removeItem(product)}
        title="Decrease quantity"
      >
        <ButtonIconContainer>
          <LuMinus style={iconStyle} />
        </ButtonIconContainer>
      </SpinnerButton>
      <Typography
        aria-description={`${product.name} quantity is ${quantity}`}
        style={{
          margin: '0 0.8em',
          minWidth: 20,
          textAlign: 'center',
        }}
        variant="span"
      >
        {quantity}
      </Typography>
      <SpinnerButton
        aria-label={`Increase ${product.name} quantity to ${quantity + 1}`}
        onClick={() => addItem(product)}
        title="Increase quantity"
      >
        <ButtonIconContainer>
          <LuPlus style={iconStyle} />
        </ButtonIconContainer>
      </SpinnerButton>
    </div>
  );
};

export default QuantitySpinner;
