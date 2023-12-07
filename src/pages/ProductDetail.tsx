import { useMemo, useState } from 'react';

import { useParams } from 'react-router-dom';

import ContinueShoppingButton from '../components/ContinueShoppingButton';
import QuantitySpinner from '../components/QuantitySpinner';
import useProducts from '../hooks/useProducts';

const ProductDetail = () => {
  const { id } = useParams();

  const [notFound, setNotFound] = useState(false);

  const { data: products, isLoading, error } = useProducts();

  const product = useMemo(() => {
    if (!isLoading && products) {
      const foundProduct = products.find(
        ({ id: productId }) => parseInt(id!) === productId
      );

      if (!foundProduct) {
        setNotFound(true);
      }

      return foundProduct;
    }
  }, [id, isLoading, products]);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  if (notFound) return <p>The requested product does not exist.</p>;

  if (!product) return null;

  return (
    <>
      <ContinueShoppingButton />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>£{product.price}</p>
      <QuantitySpinner product={product} />
    </>
  );
};

export default ProductDetail;
