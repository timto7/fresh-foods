import styled from 'styled-components';

import ProductCard from '../components/ProductCard';
import Typography from '../components/Typography';
import useProducts from '../hooks/useProducts';

const ProductGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ProductList = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <Typography>Loading...</Typography>;

  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <ProductGrid>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
};

export default ProductList;
