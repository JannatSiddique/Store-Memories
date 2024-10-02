'use client'
import { CldImage } from 'next-cloudinary';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Addtags } from './action';
import { useState } from 'react';

const View = ({src , tag}: {src: string , tag:string[]}) => {
  const [fav , setfav]= useState(tag.includes("favourite"))
  return (
    <div className='relative'>
    <CldImage
    width="960"
    height="600"
    src={src}
    sizes="100vw"
    alt="Description of my image"
  />

  <div className='absolute top-1 right-1'
  onClick={()=>{
    setfav(!fav);
    Addtags(src , fav)
  }}>
     {fav ? 
      (
          <FaHeart className='w-8 h-8 text-red-700  cursor-pointer'/>
  ): 
  (
    <CiHeart className='w-8 h-8 text-white hover:text-red-700 duration-300 cursor-pointer' />
  )}
     
      
 
  
  
  </div>
  </div>
  )
}

export default View