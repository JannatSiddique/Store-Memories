"use client";
import { CldImage, CldUploadButton, CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

type uploadimage = {
 info:{public_id: string}
 event: "success"
};

export default function Home() {
  //usestate to change the img
  const [imageId , setImageId]= useState("cld-sample-2")

  return (
    <main className='flex min-h-screen flex-col items-center justify-evenly'>
      <CldUploadButton uploadPreset="jfedoxqi"
          
      onUpload={(result)=>{
        let response = result as uploadimage   //result ko type dy di
        setImageId(response.info.public_id)
      }
      }
      />
{/* {view image} */}
      <CldImage
        width="960"
        height="600"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
