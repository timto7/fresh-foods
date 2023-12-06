import { useQuery } from '@tanstack/react-query';

import apiClient from '../services/api-client';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const fetchProducts = () =>
  apiClient
    .get<Product[]>(
      'https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json'
    )
    .then((response) => response.data);

const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};

export default useProducts;
