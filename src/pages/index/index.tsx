import { FC } from 'react';
import MainLayout from '../layouts/MainLayout';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Home.module.css';

const Home: FC = () => {
  return (
    <MainLayout>
      <section className={styles.hero}>
        <h1>Welcome to Our E-Commerce Site</h1>
        <p>Find the best products here</p>
      </section>
      <section className={styles.featuredProducts}>
        <h2>Featured Products</h2>
        {/* Example products */}
        <ProductCard id="1" name="Product 1" price={29.99} image="/assets/product-placeholder.png" />
        <ProductCard id="2" name="Product 2" price={49.99} image="/assets/product-placeholder.png" />
      </section>
    </MainLayout>
  );
};

export default Home;
