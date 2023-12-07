import { Link } from 'react-router-dom';

import Product from '../entities/Product';
import QuantitySpinner from './QuantitySpinner';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        height: 200,
        justifyContent: 'space-between',
        marginBottom: '10px',
        padding: '1em',
        width: 200,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </div>
      <div>
        <p>£{product.price}</p>
        <QuantitySpinner product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
