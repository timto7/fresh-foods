import { PropsWithChildren, createContext, useContext } from 'react';

import Product from '../entities/Product';
import useProducts from '../hooks/useProducts';

interface ProductsContextType {
  products?: Product[];
  isLoading: boolean;
  error: Error | null;
}

const ProductsContext = createContext<ProductsContextType>(
  {} as ProductsContextType
);

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export const ProductsContextProvider = ({ children }: PropsWithChildren) => {
  const { data: products, isLoading, error } = useProducts();

  return (
    <ProductsContext.Provider value={{ products, isLoading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};
