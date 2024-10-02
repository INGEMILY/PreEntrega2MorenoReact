const products = [
    { id: 'camiseta-basica', name: "Dobok profesional", category: "Uniformes", price: 20.00, image: "https://via.placeholder.com/150" },
    { id: 'pantalon-jeans', name: "Dobok competicion", category: "Uniformes", price: 40.00, image: "https://via.placeholder.com/150" },
    { id: 'sudadera-deportiva', name: "Dobok color", category: "Uniformes", price: 35.00, image: "https://via.placeholder.com/150" },
    { id: 'chaqueta-cuero', name: "Dobok poomsae", category: "Uniformes", price: 60.00, image: "https://via.placeholder.com/150" },
    { id: 'laptop-pro', name: "Empeineras", category: "Protecciones", price: 1200.00, image: "https://via.placeholder.com/150" },
    { id: 'auriculares-bluetooth', name: "Guantes", category: "Protecciones", price: 100.00, image: "https://via.placeholder.com/150" },
    { id: 'smartphone-x', name: "Casco", category: "Protecciones", price: 800.00, image: "https://via.placeholder.com/150" },
    { id: 'tablet-pro', name: "Peto", category: "Protecciones", price: 600.00, image: "https://via.placeholder.com/150" },
    { id: 'sillon-moderno', name: "Pao", category: "Implementacion", price: 300.00, image: "https://via.placeholder.com/150" },
    { id: 'mesa-comedor', name: "Paleta", category: "Implementacion", price: 500.00, image: "https://via.placeholder.com/150" },
    { id: 'lampara-pie', name: "Saco boxeo", category: "Implementacion", price: 100.00, image: "https://via.placeholder.com/150" },
    { id: 'estanteria-madera', name: "Cuerda de saltar", category: "Implementacion", price: 250.00, image: "https://via.placeholder.com/150" }
  ];
  
  // Simulación de una función que retorna datos con un delay.
  export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter(product => product.category === categoryId));
        } else {
          resolve(products);
        }
      }, 1000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(product => product.id === id));
      }, 1000);
    });
  };
  