import React from 'react';
import Image from "next/image";
import Link from "next/link";

const CardWithGrid = () => {
  return (
  <section className="card-with-grid">
    <div className="container">
    <div className='card-wrapper grid'>
      <div className='col-5'>
        <div className='logo'></div>
        <div className='text-wrapper'></div>
      </div>

      <div className='col-5'>
      <div className='logo'></div>
        <div className='text-wrapper'></div>
      </div>
      <div className='col-5'>
      <div className='logo'></div>
        <div className='text-wrapper'></div>
      </div>
      <div className='col-5'>
      <div className='logo'></div>
        <div className='text-wrapper'></div>
      </div>
      <div className='col-5'>
      <div className='logo'></div>
        <div className='text-wrapper'></div>
      </div>
    </div>
    </div>
  </section>
   
  )
}

export default CardWithGrid
