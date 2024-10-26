import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = ({ products }) => {
  return (
    <div style={styles.container}>
      {products.map((product) => (
        <Link key={product.id} to={`/item/${product.id}`} style={styles.link}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
};



export default Products;
