import React, {useContext, useState} from 'react';
import { ProductContext  } from '../contexts/ProductContext';
import Product from '../components/Product';
import  Hero  from '../components/Hero';
import { FaSearch } from "react-icons/fa";
const Home = () => {

  // getting products from product context
  const { products } = useContext (ProductContext)
  // getting only mens and womens clothing category
  const [electronicsFilter, setElectronicsFilter] = useState(false)
  const [jeweleryFilter, setJeweleryFilter] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const [clothFilter, setClothFilter] = useState(false)
  console.log(products)
  const filteredProducts = products.filter(item => {
    if (electronicsFilter)
    {
      return(
        item.category === "electronics" 
      );
    }
   if (jeweleryFilter)
    {
      
      return(
        item.category === "jewelery"
        
      )
    }
    if (clothFilter)
    {
      return(
        item.category === "men's clothing" || item.category === "women's clothing"
      );
    }
    return ( item.category === "men's clothing" || item.category === "women's clothing" || item.category === "electronics" || item.category === "jewelery"
    );
  });
  
  const searchFilteredProducts = filteredProducts.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Hero/>
      <section className='pt-10 pb-16'>
        <div className='container mx-auto'>
          <div  className='flex flex-col items-center w-full md:justify-between gap-y-5 md:gap-y-0 md:flex-row'>
          <div className='flex flex-wrap justify-center py-3 lg:justify-start gap-y-4 lg:items-center lg:pr-5 lg:flex lg:flex-row gap-x-4'>
          <div className='py-4 px-8 font-semibold capitalize bg-[#f5e6e0] hover:bg-[#ffe8de] active:bg-[#fdd6c6] rounded-md cursor-pointer' onClick={() => { setElectronicsFilter(false); setClothFilter(true); setJeweleryFilter(false) }}>cloth</div>
          <div className='py-4 px-8 font-semibold capitalize bg-[#f5e6e0] hover:bg-[#ffe8de] active:bg-[#fdd6c6] rounded-md cursor-pointer' onClick={() => { setElectronicsFilter(false); setClothFilter(false); setJeweleryFilter(true) }}>jewelery</div>
          <div className='py-4 px-8 font-semibold capitalize bg-[#f5e6e0] hover:bg-[#ffe8de] active:bg-[#fdd6c6] rounded-md cursor-pointer' onClick={() => { setElectronicsFilter(true); setClothFilter(false); setJeweleryFilter(false) }}>electronics</div>
          <div className='py-4 px-8 font-semibold capitalize bg-[#f5e6e0] hover:bg-[#ffe8de] active:bg-[#fdd6c6] rounded-md cursor-pointer' onClick={() => { setElectronicsFilter(false); setClothFilter(false); setJeweleryFilter(false)}}>All</div>
          </div>
          <form action="">
          <div className='flex items-center mb-5 gap-x-1 md:mb-0'>
            <label htmlFor="" className='mr-1'>Search</label>
            <input type="text" onChange={(e) => setSearchQuery(e.target.value)} className='bg-[#f5e6e0] py-4 rounded-md px-3 focus:outline-none text-sm' placeholder='Search Products'/>
            <FaSearch size={23} className='relative text-white cursor-pointer right-8' />
          </div>
          </form>

          </div>
          
          {searchFilteredProducts.length === 0 ? (
            <p className="mt-10 text-center text-gray-600">No products found for your search.</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w--sm mx-auto md:max-w-none md:mx-0'>
              {searchFilteredProducts.map(product => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

      </section>


    </div>
  )
};

export default Home;
