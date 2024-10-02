import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';
import { getProducts } from '../mock/products';

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(id).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h2>{id ? `Categoría: ${id}` : 'Todos los productos'}</h2>
      <Products products={products} />
    </div>
  );
};

export default ItemListContainer;
