import { Link } from 'react-router-dom';

import useBasketStore from '../stores/basket-store';
import Button from './Button';

const BasketButton = () => {
  const basket = useBasketStore((state) => state.basket);

  const totalCost = basket
    .reduce(
      (accumulator, basketItem) =>
        accumulator + basketItem.product.price * basketItem.quantity,
      0
    )
    .toFixed(2);

  return (
    <Link to="/basket">
      <Button>Basket: £{totalCost}</Button>
    </Link>
  );
};

export default BasketButton;
