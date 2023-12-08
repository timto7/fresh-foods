import ProductCard from '../components/ProductCard';
import useProducts from '../hooks/useProducts';

const ProductList = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        justifyItems: 'center',
        width: '100%',
      }}
    >
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
