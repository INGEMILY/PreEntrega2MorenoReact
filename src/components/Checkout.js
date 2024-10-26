// Checkout.js
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h2>Resumen del Pedido</h2>
      {cart.map((item, index) => (
        <p key={index}>
          {item.name} x {item.quantity}
        </p>
      ))}
      <button onClick={clearCart}>Finalizar Compra</button>
    </div>
  );
};

export default Checkout;
