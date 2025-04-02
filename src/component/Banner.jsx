
'use client'
import React from 'react';
import Image from "next/image";
import Link from "next/link"; 
import Button from './Button';
import { client } from "../..";
import { useEffect , useState } from "react";
export default function Banner()
 {const [document, setDocument] = useState ();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const doc = await client.getByUID("homepage", String(2));
        console.log(doc)

        setDocument(doc.data);
      } catch (err) {
        console.error("Failed to fetch Prismic data:", err);
      }
    };
    fetchData()
  }, []);
    return (
   
<section className="hero-banner pt-10 relative min-h-[300px]  top-0" >

<div className="bg-img absolute left-0 top-0 w-full h-full ">

  

{document?.img?.url? (
                            <Image
                                src={document?.img?.url}
                                alt="Header Logo"
                                width={200}
                                height={100}
                                className="h-full w-full object-cover "
                            />
                        ) : null}
</div>
<div className="container">
<div className="flex row grid-cols-[58%_42%] gap-24 items-end ">


<div className='px-10px  mb-[40px] '>

<p className='leading-[1.5] text-[14px] uppercase text-[#ff0092] font-bold flex flex-wrap my-[20px]'>
<span className='mr-[10px]'>
<Image
              src={"/images/line_gradient.png"}
              width={16}
              height={13}
              loading="eager"
              alt="Hero pattern Image"
              className="h-full w-full object-contain "
            />
</span>
     THE NEW WIRED AND WIRELESS LAN
</p>
<h1 className='leading-[1.1] text-[50px] uppercase text-[white]'>{document?.label} </h1>
</div>
<div className='px-10px  mb-[40px] '>
  <p className=' leading-[1.5] text-[14px] uppercase text-[#ffffff] my-[20px]'>
  {document?.para} new
  </p>
</div>
</div>
</div>

</section>
    
    
   
  );
}


