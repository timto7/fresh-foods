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
        disabled={basketMode && quantity === 1}
        onClick={() => removeItem(product)}
      >
        <ButtonIconContainer>
          <LuMinus style={iconStyle} />
        </ButtonIconContainer>
      </SpinnerButton>
      <Typography style={{ margin: '0 0.8em' }} variant="span">
        {quantity}
      </Typography>
      <SpinnerButton onClick={() => addItem(product)}>
        <ButtonIconContainer>
          <LuPlus style={iconStyle} />
        </ButtonIconContainer>
      </SpinnerButton>
    </div>
  );
};

export default QuantitySpinner;
