import React, { useContext, useState, useEffect } from 'react';
import {SidebarContext} from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect (() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

 return(
<>
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
    <div className='container flex items-center justify-between h-full mx-auto'> 

    
    {/* Logo */}
    
    <Link to={'/'}>
      <div>
        
        <img alt='' className='transition-all duration-200 hover:scale-125 w-[40px]' title='Home' src={Logo}/>
      </div>
    </Link>
    <Link to={'/'} title='Home'>  <div>
      <h1 className={`${isActive ? 'text-[#ffd9ca]' : 'text-black'} text-3xl font-medium`}>ShopNest</h1>
    </div>
    </Link>
    {/* cart */}
    <div 
    onClick={()=> setIsOpen(!isOpen)} title='Cart' className='relative flex transition-all duration-200 cursor-pointer hover:scale-110'>
      <BsBag className='text-2xl active:text-red-500'/>
      <div className=' bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
    </div>
    </div>
  </header>
</>
     )
};

export default Header;
