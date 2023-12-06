import './App.css';

import useProducts from './hooks/useProducts';

function App() {
  const { data: products, error, isLoading } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {products?.map((product) => (
        <li key={product.id}>
          {product.name} - £{product.price}
        </li>
      ))}
    </ul>
  );
}

export default App;
