import { Link } from 'react-router-dom';

import useBasketStore from '../stores/basket-store';
import Button from './Button';

const BasketButton = () => {
  const totalPrice = useBasketStore((state) => state.totalPrice);

  return (
    <Link to="/basket">
      <Button>Basket: £{totalPrice}</Button>
    </Link>
  );
};

export default BasketButton;
