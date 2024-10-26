import { useState } from 'react';

const ItemQuantitySelector = ({ onQuantityChange, initialQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity || 1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span style={{ fontSize: '1.3rem' }}>{quantity}</span> {}
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};



 

export default ItemQuantitySelector;
