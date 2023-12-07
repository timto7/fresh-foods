import { useMemo, useState } from 'react';

import { useParams } from 'react-router-dom';

import ContinueShoppingButton from '../components/ContinueShoppingButton';
import { useProductsContext } from '../contexts/ProductsContext';

const ProductDetail = () => {
  const { id } = useParams();

  const [notFound, setNotFound] = useState(false);

  const { error, isLoading, products } = useProductsContext();

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

  return (
    <>
      <ContinueShoppingButton />
      <h1>{product?.name}</h1>
      <p>{product?.description}</p>
      <p>£{product?.price}</p>
    </>
  );
};

export default ProductDetail;
