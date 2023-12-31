import { useEffect, useMemo, useState } from 'react';

import { useParams } from 'react-router-dom';

import Card from '../components/Card';
import ContinueShoppingButton from '../components/ContinueShoppingButton';
import Image from '../components/Image';
import Price from '../components/Price';
import QuantitySpinner from '../components/QuantitySpinner';
import Typography from '../components/Typography';
import useProducts from '../hooks/useProducts';

const ProductDetail = () => {
  const { id } = useParams();

  const [notFound, setNotFound] = useState(false);

  const { data: products, isLoading, error } = useProducts();

  // Get the product with an id matching the given id param
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

  useEffect(() => {
    let title = 'Fresh Foods';

    if (product) {
      title = product.name;
    }

    document.title = title;
  }, [product]);

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
        <Price style={{ marginBottom: '1em' }}>£{product.price}</Price>
        <QuantitySpinner product={product} />
      </Card>
    </>
  );
};

export default ProductDetail;
