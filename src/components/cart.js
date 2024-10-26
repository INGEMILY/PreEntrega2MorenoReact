import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector'; 

const Cart = () => {
  const { cart, clearCart, removeItem, addItem } = useContext(CartContext);

  
  const formatCurrency = (value) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(value);


  const total = cart.reduce(
    (acc, item) => 
      acc + (Number(item.price) * Number(item.quantity)), 
      0
  );

  const handleBuy = () => {
    alert('Compra exitosa!'); 
    clearCart(); 
  };

  if (cart.length === 0) {
    return <p>El carrito está vacío</p>;
  }

  return (
    <div>
      <h2>Tu Carrito</h2>
      {cart.map((item) => (
        <div key={item.id} style={styles.cartItem}>
          <img src={item.image} alt={item.name} style={styles.image} />
          <div style={styles.itemInfo}>
            <h3>{item.name}</h3>
            <p style={styles.price}>Precio: {formatCurrency(item.price)}</p>
            {}
            <ItemQuantitySelector
              onQuantityChange={(newQuantity) => {
                if (newQuantity === 0) {
                  removeItem(item.id); 
                } else {
                  addItem({ ...item, quantity: newQuantity });
                }
              }}
              initialQuantity={item.quantity}
            />
          </div>
          <button onClick={() => removeItem(item.id)} style={styles.button}>
            Eliminar
          </button>
        </div>
      ))}
      <h3 style={styles.total}>Total: {formatCurrency(total)}</h3>
      <button onClick={handleBuy} style={styles.buyButton}>
        Comprar
      </button>
    </div>
  );
};

const styles = {
  cartItem: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '15px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: '100px',
    height: '100px',
    marginRight: '15px',
  },
  itemInfo: {
    flex: 1,
    marginRight: '10px',
  },
  price: {
    fontSize: '16px',
    margin: '5px 0',
  },
  button: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  total: {
    textAlign: 'right',
    fontSize: '18px',
    margin: '10px 0',
  },
  buyButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Cart;
