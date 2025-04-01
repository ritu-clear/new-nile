import React from 'react'
import Image from 'next/image'
import Button from './Button'
const SecondCta = () => {
  return (
    <section className='second-cta mt-[90px] '>
      <div className='container'>
      <div className="relaive bg-gradient-to-l from-[#4e7dff] via-[#1e56f3] to-[#16348a] flex flex-wrap">
     
          <div className="  md:w-1/2  md:py-4">
          <div className="md:min-h-[300px] relative bg-[url('/images/idc-background.jpg')]
           bg-cover bg-center bg-no-repeat  ">
          <div className='absolute  top-[-60px] left-0  right-0 mx-auto'>
          <Image
                      className="w-full h-full object-contain"
                      width={552}
                      height={320}
                      alt="laptop image"
                      src={"/images/webinar-window.webp"}
                    />  </div> </div> </div>
          <div className='md:w-1/2 md:py-10 md:px-4'>
          <p className='leading-[1.5] text-[14px] uppercase text-[#ffffff] font-bold flex flex-wrap my-[20px]'>
<span className='mr-[10px]'>
<Image
              src={"/images/line-white.webp"}
              width={16}
              height={13}
              loading="eager"
              alt="Hero pattern Image"
              className="h-full w-full object-contain "
            />
</span>
     Webinar series
</p>
            <h3 className='2xl:mt-2 mt-1  mb-4  text-white'>Campus Networking Redefined: A Revolution in Autonomous Networking</h3>
            <p className='2xl:mt-2 mt-1  mb-4  text-white'> Discover how Nile is revolutionizing enterprise networking through a comprehensive three-part webinar series designed to address the
               needs of both business and technical leadership.</p>

           

            <Button type = {'primary-pink-transparent'}  href="/" text={'link more'} className='mt-[20px]' />
          </div>
           </div>

      </div>
      
    </section>
  )
}

export default SecondCta
