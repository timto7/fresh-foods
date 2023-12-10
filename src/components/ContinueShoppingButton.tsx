import Button from './Button';

import { LuArrowLeft } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

// Common back button
const ContinueShoppingButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/')}
      startIcon={<LuArrowLeft />}
      style={{ marginBottom: '1em' }}
      variant="outlined"
    >
      Continue Shopping
    </Button>
  );
};

export default ContinueShoppingButton;
