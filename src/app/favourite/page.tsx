import { Button } from "@/components/ui/button"
import cloudinary from "cloudinary"
import View from "../gallery/view"

interface Img {
  public_id: string,
tags: string[]
}

const Page = async() => {
  let resp = await cloudinary.v2.search
  .expression('resource_type:image AND tags=favourite')
  .sort_by('public_id','desc')
  .max_results(5)
  .with_field("tags")
  .execute() as{ resources:Img[]} ;
  
  return (
    <>
    <div>
      
    <div className=" py-4 px-5 flex items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-tight">
 Favourite</h2>
 
  </div>
  <div className="grid grid-cols-4 gap-4 p-3 ">
  {resp.resources.map((item, i) => (
       <div key={i}>
          <View src={item.public_id} tag={item.tags} />
        </div>
      ))}
           </div>
      </div>
  
  ,</>
  )
}

export default Page