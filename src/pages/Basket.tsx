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
  grid-template-columns: auto 240px;
  gap: 20px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const BuyBox = () => {
  const basket = useBasketStore((state) => state.basket);
  const totalPrice = useBasketStore((state) => state.totalPrice);

  return (
    <div>
      <Card>
        <Typography style={{ fontSize: 18, fontWeight: 500, margin: 0 }}>
          Total: £{totalPrice}
        </Typography>
        {basket.length > 0 && (
          <Button style={{ marginTop: '1em', width: '100%' }}>
            Proceed to Checkout
          </Button>
        )}
      </Card>
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
