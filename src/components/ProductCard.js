const ProductCard = ({ product }) => {
    return (
      <div style={styles.card}>
        <img src={product.image} alt={product.name} style={styles.image} />
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
    cardHover: {
      transform: 'scale(1.05)',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '5px',
    },
  };
  
  export default ProductCard;
  