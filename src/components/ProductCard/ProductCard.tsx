import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

const ProductCard: FC<ProductCardProps> = ({ id, name, price, image }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={name} width={200} height={200} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <Link href={`/products/${id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
