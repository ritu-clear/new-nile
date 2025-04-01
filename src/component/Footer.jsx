import React from 'react'
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <section className='footer bg-[#000000]'>
      <div className='container'>
        <div className='row flex  flex-wrap py-[60px]'>
          <div className='basis-3/12'>
          <div className="lg:max-w-[100px] h-[49px] max-w-[13.75rem]  xl:max-w-[13.75rem] ">
              <Link href={'/'} aria-label="nile Logo" className=" inline-block">
                <Image
                  src={"/images/nile-logo.svg"}
                  width={100}
                  height={49}
                  alt={"nile Logo Black"}
                  />
                </Link>
            </div>
          </div>
          <div className='basis-9/12 flex flex-wrap '>
<div className='basis-3/9'>
          <ul>
          <li className="mb-[4px] group">
  <Link
    href="/"
    aria-label="privacy-policy"
    className="leading-[1.5] text-[14px] uppercase text-white inline-block transition-colors duration-300 group-hover:text-[#ff0092]"
  >
    Privacy Policy
  </Link>
</li>

              <li className=' mb-[10px] group'>
              <Link href={'/'} aria-label="Sitemap" className="leading-[1.5] text-[14px] uppercase text-white inline-block transition-colors duration-300 group-hover:text-[#ff0092]">
              Sitemap
              </Link> </li>
            </ul>
            
</div>
          <div className='basis-3/9'>
<ul>     <li className=' mb-[10px] group'>
              <Link href={'/'} aria-label="Sitemap" className="leading-[1.5] text-[14px] uppercase text-white inline-block transition-colors duration-300 group-hover:text-[#ff0092]">
              Contact Support
              </Link>
               </li>
               <li className=' mb-[10px] group'>
              <Link href={'/'} aria-label="privacy-policy" className="leading-[1.5] text-[14px] uppercase text-white inline-block transition-colors duration-300 group-hover:text-[#ff0092]">
              Explore Pricing
              </Link> </li>
              <li className=' mb-[10px] group'>
              <Link href={'/'} aria-label="Sitemap" className="leading-[1.5] text-[14px] uppercase text-white inline-block transition-colors duration-300 group-hover:text-[#ff0092]">
              Security & Compliance
              </Link></li>
              <li className=' mb-[10px] group'>
              <Link href={'/'} aria-label="privacy-policy" className="leading-[1.5] text-[14px] uppercase text-white inline-block transition-colors duration-300 group-hover:text-[#ff0092]">
              Company Store
              </Link> </li>
            </ul>
            </div>
 <div className='basis-3/9'>
 <ul>   
              <li className=' mb-[10px] group'>
              <Link href={'/'} aria-label="privacy-policy" className="leading-[1.5] text-[14px] uppercase text-white inline-block transition-colors duration-300 group-hover:text-[#ff0092]">
              AI Networking
              </Link> </li>
              <li className=' mb-[10px] group'>
              <Link href={'/'} aria-label="Sitemap" className="leading-[1.5] text-[14px] uppercase text-white inline-block transition-colors duration-300 group-hover:text-[#ff0092]">
              Network as a Service
              </Link>
               </li>
               <li className=' mb-[10px] group'>
              <Link href={'/'} aria-label="privacy-policy" className="leading-[1.5] text-[14px] uppercase text-white inline-block transition-colors duration-300 group-hover:text-[#ff0092]">
              Network Design
              </Link> </li>
              <li className=' mb-[10px] group'>
              <Link href={'/'} aria-label="Sitemap" className="leading-[1.5] text-[14px] uppercase text-white inline-block transition-colors duration-300 group-hover:text-[#ff0092]">
              Network Management
              </Link>
               </li>
               <li className=' mb-[10px] group'>
              <Link href={'/'} aria-label="Sitemap" className="leading-[1.5] text-[14px] uppercase text-white inline-block transition-colors duration-300 group-hover:text-[#ff0092]">
              Network Security
              </Link>
               </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap mt-[40px] border-t border-gray-300 py-10'>
      <div className='basis-[30%] '>
        <p className="leading-[1.5] text-[14px] uppercase text-white">Copyright © 2025 Nile. All Rights Reserved</p>
      </div>
      <div className='basis-[70%] justify-end flex '>
       <ul className=' flex flex-wrap  list-disc text-blue-500'>
             <li className="mr-[18px]">  
              <Link href={'/'} aria-label="Sitemap" className="leading-[1.5] text-[14px] uppercase text-white inline-block transition-colors duration-300 group-hover:text-[#ff0092]">
               Terms and Conditions
              </Link></li> 
              <li className="mr-[18px]">
              <Link href={'/'} aria-label="Sitemap" className="leading-[1.5] text-[14px] uppercase text-white inline-block transition-colors duration-300 group-hover:text-[#ff0092]">
              Privacy Policy
              </Link></li> 
              <li className="mr-[18px]">
              <Link href={'/'} aria-label="Sitemap" className="leading-[1.5] text-[14px] uppercase text-white inline-block transition-colors duration-300 group-hover:text-[#ff0092]">
              Sitemap
              </Link>
              </li>
       </ul>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Footer

