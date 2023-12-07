import React from 'react';
import ReactDOM from 'react-dom/client';

import './main.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import router from './routing/routes.tsx';
import { ProductsContextProvider } from './contexts/ProductsContext.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProductsContextProvider>
        <RouterProvider router={router} />
      </ProductsContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
