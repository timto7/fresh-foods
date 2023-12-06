import Product from '../entities/Product';
import Button from './Button';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1em',
        boxSizing: 'border-box',
        marginBottom: '10px',
        height: 200,
        width: 200,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>{product.name}</p>
      </div>
      <div>
        <p>{product.price}</p>
        <Button>Add</Button>
      </div>
    </div>
  );
};

export default ProductCard;
