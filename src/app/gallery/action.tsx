"use server"
import cloudinary from "cloudinary"
import { revalidatePath } from "next/cache";

export async function Addtags(publicId:string , fav: boolean){
    if (fav){
        await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
    }
    else{
        await cloudinary.v2.uploader.add_tag("favourite", [publicId]);

    }

   await new Promise((resolve)=>{
        setTimeout(resolve), 1000;
    }
   );
   revalidatePath("/gallery") ; //revadpath create page after resolve
    
}