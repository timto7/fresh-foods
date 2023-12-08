import Button from './Button';

import { LuArrowLeft } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const ContinueShoppingButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/')}
      startIcon={<LuArrowLeft />}
      variant="outlined"
    >
      Continue Shopping
    </Button>
  );
};

export default ContinueShoppingButton;
