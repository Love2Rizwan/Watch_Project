import { FC } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';

const ProductDetails: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainLayout>
      <h1>Product Details for {id}</h1>
      {/* Fetch product details using the id */}
    </MainLayout>
  );
};

export default ProductDetails;
