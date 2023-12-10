import { useEffect, useMemo } from 'react';

import { LuTrash2 } from 'react-icons/lu';
import styled from 'styled-components';

import BasketItem from '../components/BasketItem';
import Button from '../components/Button';
import Card from '../components/Card';
import ContinueShoppingButton from '../components/ContinueShoppingButton';
import Typography from '../components/Typography';
import useBasketStore from '../stores/basket-store';

const BasketLayout = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: auto 240px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const BuyBoxCard = styled(Card)`
  position: fixed;
  width: 240px;

  @media (max-width: 640px) {
    position: relative;
    width: 100%;
  }
`;

const PriceTypography = styled(Typography)`
  color: ${(props) => props.theme.colors.text.solid};
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

const BuyBox = () => {
  useEffect(() => {
    document.title = 'Basket';
  }, []);

  const basket = useBasketStore((state) => state.basket);
  const totalPrice = useBasketStore((state) => state.totalPrice);

  const itemCount = useMemo(
    () =>
      basket.reduce(
        (accumulator, basketItem) => basketItem.quantity + accumulator,
        0
      ),
    [basket]
  );

  return (
    <div style={{ position: 'relative' }}>
      <BuyBoxCard>
        <PriceTypography>Total: £{totalPrice}</PriceTypography>
        <Typography>{itemCount} basket items</Typography>
        {basket.length > 0 && (
          <Button style={{ width: '100%' }}>Proceed to Checkout</Button>
        )}
      </BuyBoxCard>
    </div>
  );
};

const BasketList = () => {
  const basket = useBasketStore((state) => state.basket);
  const clearBasket = useBasketStore((state) => state.clearBasket);

  return (
    <Card>
      <Typography variant="heading">Shopping Basket</Typography>
      {basket.length > 0 ? (
        <Button
          onClick={() => clearBasket()}
          startIcon={<LuTrash2 />}
          variant="ghost"
        >
          Clear the Basket
        </Button>
      ) : (
        <Typography>There are no items in the basket.</Typography>
      )}
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {basket.map((basketItem) => (
          <BasketItem
            key={basketItem.product.id}
            product={basketItem.product}
          />
        ))}
      </ul>
    </Card>
  );
};

const Basket = () => {
  return (
    <>
      <ContinueShoppingButton />
      <BasketLayout>
        <BasketList />
        <BuyBox />
      </BasketLayout>
    </>
  );
};

export default Basket;
