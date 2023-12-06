import { createBrowserRouter } from 'react-router-dom';

import Error from '../pages/Error';
import Layout from './Layout';
import ProductList from '../pages/ProductList';
import Basket from '../pages/Basket';
import ProductDetail from '../pages/ProductDetail';

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
