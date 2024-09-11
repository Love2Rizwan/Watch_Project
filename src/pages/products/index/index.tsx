import { FC } from 'react';
import MainLayout from '../../layouts/MainLayout';
import ProductCard from '../../components/ProductCard';

const Products: FC = () => {
  return (
    <MainLayout>
      <h1>Product Listing</h1>
      <div>
        {/* Example products */}
        <ProductCard id="1" name="Product 1" price={29.99} image="/assets/product-placeholder.png" />
        <ProductCard id="2" name="Product 2" price={49.99} image="/assets/product-placeholder.png" />
      </div>
    </MainLayout>
  );
};

export default Products;
