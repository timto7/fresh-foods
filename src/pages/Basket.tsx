import { LuTrash2 } from 'react-icons/lu';

import BasketItem from '../components/BasketItem';
import Button from '../components/Button';
import Card from '../components/Card';
import ContinueShoppingButton from '../components/ContinueShoppingButton';
import useBasketStore from '../stores/basket-store';

const BuyBox = () => {
  const basket = useBasketStore((state) => state.basket);
  const totalPrice = useBasketStore((state) => state.totalPrice);

  return (
    <div>
      <Card>
        <p>Total: £{totalPrice}</p>
        {basket.length > 0 && <Button>Proceed to Checkout</Button>}
      </Card>
    </div>
  );
};

const BasketList = () => {
  const basket = useBasketStore((state) => state.basket);
  const clearBasket = useBasketStore((state) => state.clearBasket);

  return (
    <Card>
      <h1>Shopping Basket</h1>
      {basket.length > 0 ? (
        <Button
          onClick={() => clearBasket()}
          startIcon={<LuTrash2 />}
          variant="ghost"
        >
          Clear the Basket
        </Button>
      ) : (
        <p>There are no items in the basket.</p>
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
      <div
        style={{ display: 'grid', gridTemplateColumns: 'auto 200px', gap: 20 }}
      >
        <BasketList />
        <BuyBox />
      </div>
    </>
  );
};

export default Basket;
