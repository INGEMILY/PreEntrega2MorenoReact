
import { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
 
  return (
    <Link to="/cart" style={styles.container}> {}
      <span>🛒</span>
      {totalItems > 0 && <span>{totalItems}</span>} {}
    </Link>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '1.2rem',
    textDecoration: 'none', 
    color: 'inherit', 
  },
  
  span:{
    color: 'white',
  }
};



export default CartWidget;
