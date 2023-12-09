import { createBrowserRouter } from 'react-router-dom';

import Basket from '../pages/Basket';
import Error from '../pages/Error';
import ProductDetail from '../pages/ProductDetail';
import ProductList from '../pages/ProductList';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <ProductList /> },
      { path: '/product/:id', element: <ProductDetail /> },
      { path: '/basket', element: <Basket /> },
    ],
  },
]);

export default router;
