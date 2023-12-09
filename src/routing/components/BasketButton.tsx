import { LuShoppingBasket } from 'react-icons/lu';
import { Link } from 'react-router-dom';

import useBasketStore from '../../stores/basket-store';
import Button from '../../components/Button';

const BasketButton = () => {
  const totalPrice = useBasketStore((state) => state.totalPrice);

  return (
    <Link to="/basket" style={{ textDecoration: 'none' }}>
      <Button
        startIcon={<LuShoppingBasket />}
        title="Go to Basket"
        variant="outlined"
      >
        Basket: £{totalPrice}
      </Button>
    </Link>
  );
};

export default BasketButton;
