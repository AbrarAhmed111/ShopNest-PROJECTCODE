import React, {createContext, useState, useEffect} from 'react';
// Using createcontext so that data is directly sent from parent to great grand children
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  // products state
  const [products, setProducts] = useState([]);
  // fetch products
  useEffect(() =>{
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data)
      console.log(data)
    };
    fetchProducts();
    
  }, [])
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
