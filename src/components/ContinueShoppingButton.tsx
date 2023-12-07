import Button from './Button';

import { useNavigate } from 'react-router-dom';

const ContinueShoppingButton = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate('/')}>Continue Shopping</Button>;
};

export default ContinueShoppingButton;
