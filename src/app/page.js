// 'use client'
// import Image from "next/image";
// import { client } from "../..";
// import { useEffect , useState } from "react";

// export default function Home()
//  {const [document, setDocument] = useState ();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const doc = await client.getByUID("homepage", String(2));
//         console.log(doc)

//         setDocument(doc.data);
//       } catch (err) {
//         console.error("Failed to fetch Prismic data:", err);
//       }
//     };
//     fetchData()
//   }, []);

//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
     
//       <section className="hero-banner pt-10 relative min-h-[300px] " >
//         <div className="container">
// <div className="bg-img relative left-0 top-0 w-full h-full ">

  

// {document?.img?.url? (
//                             <Image
//                                 src={document?.img?.url}
//                                 alt="Header Logo"
//                                 width={200}
//                                 height={100}
//                                 className="h-full w-full object-cover "
//                             />
//                         ) : null}
// </div>
// </div>
// </section>
    
    
//     </div>
//   );
// }
// 'use client'
// import { client } from "../..";
//  import { useEffect , useState } from "react";
import Banner from '../component/Banner';
import ColTwoGrid from '../component/ColTwoGrid';
import CardTwoGrid from '../component/CardTwoGrid';
import SecondCta from "../component/SecondCta";
import Footer from "../component/Footer";
const Home = () =>  {
  return (
    <>
  <Banner/>
   <ColTwoGrid/>
   <CardTwoGrid/>
   <SecondCta/>
   <Footer/>
    </>
   
  );
}
export default Home;

