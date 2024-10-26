import { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={styles.card}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={product.image} 
        alt={product.name} 
        style={isHovered ? styles.imageHover : styles.image} 
      />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    width: '180px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    
  },
  image: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '5px',
    transition: 'transform 0.2s', 
  },
  imageHover: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '5px',
    transform: 'scale(1.3)', 
  },
};

export default ProductCard;
