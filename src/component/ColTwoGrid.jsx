import React from 'react';
import Image from "next/image";
import Link from "next/link";
const ColTwoGrid = () => {
  
  return (
    
<section className="text-secondaryWhite relative bg-primaryBlack pt-16 xl:pt-24 " >
<div className="container">
<div className="flex relative z-[1] flex-wrap gap-4 2xl:gap-6  mx-[-0.5rem] lg:pt-[24px] xl:mx-[-0.75rem] xl:pt-[40px] shortHeight:pt-8 2xl:pt-16">
<div className="max-w-full md:basis-[calc(50%-8px)] 2xl:basis-[calc(50%-12px)] rounded-2xl  md:mt-10 card transition-all duration-300 ease-in-out shadow-darkShadow hover:shadow-orangeShadow">
              <Link
                href={
                  "/"
                }
                className="cursor-pointer group"
              >
                <div className="bg-secondaryWhite/30 h-full md:bg-secondaryWhite/70 lg:bg-secondaryWhite/50 p-6 border-2 transform transition-all duration-300 ease-in-out border-secondaryWhite/60 group-hover:border-primaryOrange rounded-2xl mt-0 mb-10 md:mb-0 ">
                  <div className="overflow-hidden rounded-t-2xl h-[300px] md:h-[180px] lg:h-[250px] xl:h-[280px] 2xl:h-auto">
                    <Image
                      className="w-full h-full object-cover transform transition-all duration-300 ease-in-out group-hover:scale-110"
                      width={552}
                      height={320}
                      alt="card image"
                      src={"/images/dummy-img.png"}
                    />
                  </div>
                  <div className="shortHeight:mt-7 shortHeight:mb-1 mb-0 mt-5 2xl:mt-8">
                    <span className="eyebrow text-secondaryGreen">
                    Lorem Ipsun
                    </span>
                    <h4 className="2xl:mt-2 mt-1 mb-0 md:mb-4 lg:mb-0 text-primaryBlack">
                      Lorem Ipsun.
                    </h4>
                  </div>
                </div>
              </Link>
            </div>
            <div className="max-w-full md:basis-[calc(50%-8px)] 2xl:basis-[calc(50%-12px)] rounded-2xl  md:mt-10 card transition-all duration-300 ease-in-out shadow-darkShadow hover:shadow-orangeShadow">
              <Link
                href={
                  "/"
                }
                className="cursor-pointer group"
              >
                <div className="bg-secondaryWhite/30 h-full md:bg-secondaryWhite/70 lg:bg-secondaryWhite/50 p-6 border-2 transform transition-all duration-300 ease-in-out border-secondaryWhite/60 group-hover:border-primaryOrange rounded-2xl mt-0 mb-10 md:mb-0 ">
                  <div className="overflow-hidden rounded-t-2xl h-[300px] md:h-[180px] lg:h-[250px] xl:h-[280px] 2xl:h-auto">
                    <Image
                      className="w-full h-full object-cover  transform transition-all duration-300 ease-in-out group-hover:scale-110"
                      width={552}
                      height={320}
                      alt="card image"
                      src={"/images/dummy-img.png"}
                    />
                  </div>
                  <div className="shortHeight:mt-7 shortHeight:mb-1 mb-0 mt-5 2xl:mt-8">
                    <span className="eyebrow text-secondaryGreen">
                      Lorem Ipsun123
                    </span>
                    <h4 className="2xl:mt-2 mt-1 mb-0 md:mb-4 lg:mb-0 text-primaryBlack">
                      Get the latest on the Salt Typhoon attack and how to
                      protect your network from cyber threats.
                    </h4>
                  </div>
                </div>
              </Link>
            </div>
</div>
</div>

</section>
    
  )
}

export default ColTwoGrid;