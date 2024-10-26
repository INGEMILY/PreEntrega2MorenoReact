import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector';
import { getProductById } from '../mock/products'; 

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const { addItem } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    getProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h2 style={styles.name}>{product.name}</h2>
      <p style={styles.price}>Precio: ${product.price} COP</p>
      <ItemQuantitySelector onQuantityChange={setQuantity} style={styles.quantitySelector} />
      <button style={styles.button} onClick={() => addItem({ ...product, quantity })}>
        Agregar al carrito
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
    padding: '10px', 
  },
  image: {
    width: '500px',
    height: '500px',
  },
  name: {
    fontSize: '33px',
    margin: '10px 0',
  },
  price: {
    fontSize: '22px', 
    color: '#333',
    margin: '10px 0',
  },
  quantitySelector: {
    margin: '30px 0',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '20px 20px', 
    fontSize: '20px', 
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default ItemDetailContainer;
