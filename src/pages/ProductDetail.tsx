import { useMemo, useState } from 'react';

import { useParams } from 'react-router-dom';

import Card from '../components/Card';
import ContinueShoppingButton from '../components/ContinueShoppingButton';
import Price from '../components/Price';
import QuantitySpinner from '../components/QuantitySpinner';
import useProducts from '../hooks/useProducts';
import Typography from '../components/Typography';
import Image from '../components/Image';

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

  if (isLoading) return <Typography>Loading...</Typography>;

  if (error) return <Typography>Error: {error.message}</Typography>;

  if (notFound)
    return <Typography>The requested product does not exist.</Typography>;

  if (!product) return null;

  return (
    <>
      <ContinueShoppingButton />
      <Card>
        <Typography variant="heading">{product.name}</Typography>
        <Image />
        <Typography>{product.description}</Typography>
        <Price>£{product.price}</Price>
        <QuantitySpinner product={product} />
      </Card>
    </>
  );
};

export default ProductDetail;
