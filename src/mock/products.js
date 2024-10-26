const products = [
    { id: 'Dobok profesional', name: "Dobok profesional", category: "Uniformes", price: 200000.00, image: "https://www.clubdelalucha.fr/6465-large_default/dobok-daedo-master-oficial-wt-ta20051.jpg" },
    { id: 'Dobok competicion', name: "Dobok competicion", category: "Uniformes", price: 400000.00, image: "https://tiendabushido.cl/wp-content/uploads/2020/12/Dobok-hi-tech-scaled.jpg" },
    { id: 'Dobok color', name: "Dobok color", category: "Uniformes", price: 350000.00, image: "https://th.bing.com/th/id/OIP.owYUDF8UpYHxaaRH4BhERQHaJk?rs=1&pid=ImgDetMain" },
    { id: 'Dobok poomsae', name: "Dobok poomsae", category: "Uniformes", price: 600000.00, image: "https://www.daedo.com/3525-large_default/poomsae-dobok-dan-woman.jpg" },
    { id: 'Empeineras', name: "Empeineras", category: "Protecciones", price: 120000.00, image: "https://http2.mlstatic.com/D_NQ_NP_999627-MCO31354096603_072019-F.jpg" },
    { id: 'Guantes', name: "Guantes", category: "Protecciones", price: 100000.00, image: "https://http2.mlstatic.com/guantes-para-taekwondo-marca-asiana-D_NQ_NP_730121-MLM31218255131_062019-F.jpg" },
    { id: 'Casco', name: "Casco", category: "Protecciones", price: 80000.00, image: "https://th.bing.com/th/id/OIP.KIMOjoMffMwYBaoLZ8uDUQHaHa?rs=1&pid=ImgDetMain" },
    { id: 'Peto', name: "Peto", category: "Protecciones", price: 60000.00, image: "https://http2.mlstatic.com/D_NQ_NP_2X_958550-MLM45497687430_042021-F.jpg" },
    { id: 'Pao', name: "Pao", category: "Implementacion", price: 30000.00, image: "https://th.bing.com/th/id/OIP.VLLzfd2Kr35uRfZaxV3S5AHaGj?rs=1&pid=ImgDetMain" },
    { id: 'Paleta', name: "Paleta", category: "Implementacion", price: 50000.00, image: "https://th.bing.com/th/id/OIP.PGUkkn8Fxj8fdpSWGJ6M3AHaHa?rs=1&pid=ImgDetMain" },
    { id: 'Saco boxeo', name: "Saco boxeo", category: "Implementacion", price: 100000.00, image: "https://carulla.vtexassets.com/arquivos/ids/298603/saco-de-boxeo-everlast-sh4006wb-60-lbs-13-pulg-x34-pulg-negro.jpg?v=637104367250570000" },
    { id: 'Cuerda de saltar', name: "Cuerda de saltar", category: "Implementacion", price: 25000.00, image: "https://th.bing.com/th/id/R.d7dbef2b658d8edb9904cf0163c75250?rik=U%2bX1vDafcCzasA&riu=http%3a%2f%2fmedios.plazavip.com%2ffotos%2fproductos_sears1%2foriginal%2f2492882.jpg&ehk=0WfwRpkidOQXCMWjXO4Ex2GvTG8X11w4tUikdcDmiWg%3d&risl=&pid=ImgRaw&r=0" }
  ];
  
  
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

  
  