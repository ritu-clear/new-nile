import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Button from './Button';
const CardTwoGrid = () => {
  return (
    <section className='Card-two-Grid mt-[50px]' >
    <div className='container'>
      <div className=' flex flex-wrap flex-row-reverse'>
    <div className=' md:w-1/2'>
    <Image
                      className="w-full h-full object-cover transform transition-all duration-300 ease-in-out group-hover:scale-110"
                      width={552}
                      height={320}
                      alt="card image"
                      src={"/images/dummy-img.png"}
                    /> 

       </div>
<div className=' md:w-1/2  md:pr-5'>

<p className=' leading-[1.5] text-[14px] uppercase text-[black] my-[20px]'>
  Imagine a network that instantly prevents ransomware attacks, 
  continuously monitors and tunes its performance, and automates 
  management. A new wired and wireless LAN is here and its smarter, 
  safer, and more seamless than ever. 
  </p>
  <p className=' leading-[1.5] text-[14px] uppercase text-[black] my-[20px]'>
  Imagine a network that instantly prevents ransomware attacks, 
  continuously monitors and tunes its performance, and automates 
  management. A new wired and wireless LAN is here and its smarter, 
  safer, and more seamless than ever. 
  </p>
</div>
      </div>
      <div className=' flex flex-wrap mt-6 '>
    <div className=' md:w-1/2'>
    <Image
                      className="w-full h-full object-cover transform transition-all duration-300 ease-in-out group-hover:scale-110"
                      width={552}
                      height={320}
                      alt="card image"
                      src={"/images/dummy-img.png"}
                    /> 

       </div>
<div className='  md:pl-5  md:w-1/2 '>

<p className=' leading-[1.5] text-[14px] uppercase text-[black] my-[20px]'>
  Imagine a network that instantly prevents ransomware attacks, 
  continuously monitors and tunes its performance, and automates 
  management. A new wired and wireless LAN is here and its smarter, 
  safer, and more seamless than ever. 
  </p>
  <p className=' leading-[1.5] text-[14px] uppercase text-[black] my-[20px]'>
  Imagine a network that instantly prevents ransomware attacks, 
  continuously monitors and tunes its performance, and automates 
  management. A new wired and wireless LAN is here and its smarter, 
  safer, and more seamless than ever. 
  </p>
    </div>
      </div>
    </div>
    
    
    
    </section>
  )
}

export default CardTwoGrid
