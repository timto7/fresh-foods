import BasketItem from '../components/BasketItem';
import ContinueShoppingButton from '../components/ContinueShoppingButton';
import useBasketStore from '../stores/basket-store';

const BasketHeader = () => {
  const basket = useBasketStore((state) => state.basket);
  const totalPrice = useBasketStore((state) => state.totalPrice);

  if (!basket.length) return <p>There are no items in the basket.</p>;

  return <p>Total: £{totalPrice}</p>;
};

const BasketList = () => {
  const basket = useBasketStore((state) => state.basket);

  return (
    <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
      {basket.map((basketItem) => (
        <BasketItem key={basketItem.product.id} product={basketItem.product} />
      ))}
    </ul>
  );
};

const Basket = () => {
  return (
    <>
      <ContinueShoppingButton />
      <BasketHeader />
      <BasketList />
    </>
  );
};

export default Basket;
