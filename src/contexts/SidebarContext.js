import React, {createContext, useState} from 'react';
// import { Link } from 'react-router-dom';
// import { IoMdArrowForward} from 'react-icons/io';
// import { FiTrash2} from 'react-icons/fi';
// import CartItem from '../components/CartItem';
// import { SidebarContext } from '../contexts/SidebarContext';


// creat context
export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {
// sidebar state
const [isOpen, setIsOpen] = useState(false);

const handleClose = () => 
{
  setIsOpen(false);
}



  return (
    <>
    <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>{children}</SidebarContext.Provider>
    
    </>
  );
};

export default SidebarProvider;
