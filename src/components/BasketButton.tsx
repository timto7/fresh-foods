import { Link } from 'react-router-dom';

import { LuShoppingBasket } from 'react-icons/lu';

import useBasketStore from '../stores/basket-store';
import Button from './Button';

const BasketButton = () => {
  const totalPrice = useBasketStore((state) => state.totalPrice);

  return (
    <Link to="/basket" style={{ textDecoration: 'none' }}>
      <Button startIcon={<LuShoppingBasket />}>Basket: £{totalPrice}</Button>
    </Link>
  );
};

export default BasketButton;
