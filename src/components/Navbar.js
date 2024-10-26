import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brand}>Tienda Taekwondo</Link>
      <div style={styles.linkContainer}>
        <Link to="/category/Uniformes" style={styles.link}>Uniformes</Link>
        <Link to="/category/Protecciones" style={styles.link}>Protecciones</Link>
        <Link to="/category/Implementacion" style={styles.link}>Implementación</Link>
        <CartWidget to="/category/Implementacion" /> {}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
    padding: '10px 20px',
    backgroundColor: '#e12b18',
    borderBottom: '1px solid #ccc',
  },

  
  brand: {
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: 'white',
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    flexGrow: 1, 
  },
  link: {
    margin: '0 10px',
    textDecoration: 'none',
    color: 'white',
    fontSize :"20px",
  },
  linkHover: {
    color: '#e31dd7', 
  },

 
};

export default Navbar;
