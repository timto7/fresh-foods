import './App.css';

import useProducts from './hooks/useProducts';

function App() {
  const { data } = useProducts();

  console.log(data);

  return <></>;
}

export default App;
