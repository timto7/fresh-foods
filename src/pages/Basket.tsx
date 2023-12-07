import BasketItem from '../components/BasketItem';
import ContinueShoppingButton from '../components/ContinueShoppingButton';
import useBasketStore from '../stores/basket-store';

const Basket = () => {
  const basket = useBasketStore((state) => state.basket);

  return (
    <>
      <ContinueShoppingButton />
      {!basket.length && <p>There are no items in the basket.</p>}
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {basket.map((basketItem) => (
          <BasketItem
            key={basketItem.product.id}
            product={basketItem.product}
          />
        ))}
      </ul>
    </>
  );
};

export default Basket;
