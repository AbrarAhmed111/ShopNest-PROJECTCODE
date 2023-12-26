import React from 'react';
import WomanImg from '../img/woman_hero.png';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <>
    <section className=' h-[800px]  bg-hero bg-no-repeat bg-cover shadow-md bg-center py-24'>

    <div className="container flex justify-around h-full mx-auto">
      {/* text */}
    <div className='flex flex-col justify-center '>
      <div className='flex items-center font-semibold uppercase'>
        <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
      </div>
      <h1 className='text-[70px] leading-[1.1] font-light mb-4'>AUTUMN SALE STYLISH
        <br />
        <span>WOMENS</span>
      </h1>
      <Link to={'/'} className='self-start font-semibold uppercase border-b-2 border-primary'></Link>
    </div>
      {/* image */}
    <div className='hidden lg:block'>
      <img src={WomanImg} alt="" />
    </div>

    </div>  
    </section>
    
    </>
  );
};

export default Hero;
