import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brand}>Tienda Taekwondo</Link>
      <div>
        <Link to="/category/Uniformes" style={styles.link}>Uniformes</Link>
        <Link to="/category/Protecciones" style={styles.link}>Protecciones</Link>
        <Link to="/category/Implementacion" style={styles.link}>Implementacion</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#f8f8f8',
    borderBottom: '1px solid #ccc',
  },
  brand: {
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: 'black',
  },
  link: {
    margin: '0 10px',
    textDecoration: 'none',
    color: 'black',
  },
};

export default Navbar;
