import { useQuery } from '@tanstack/react-query';

import apiClient from '../services/api-client';
import Product from '../entities/Product';

const fetchProducts = () =>
  apiClient
    .get<Product[]>(
      'https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json'
    )
    .then((response) => response.data);

// This hook uses React Query to request data via Axios.
// The data is cached and becomes the source of truth for product state.
const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};

export default useProducts;
