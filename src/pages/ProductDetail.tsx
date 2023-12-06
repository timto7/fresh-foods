import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return <div>ProductDetailPage: {id}</div>;
};

export default ProductDetail;
